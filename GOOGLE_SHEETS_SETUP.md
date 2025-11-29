# Google Sheets Waitlist Setup Guide

## Step 1: Create Your Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it: **TruOpt.ai Waitlist**
4. In the first row, add these headers:
   ```
   Timestamp | Email | Company | Spend | Platforms | Role
   ```

## Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code
3. Paste the following code:

```javascript
function doPost(e) {
  try {
    // Parse incoming data
    var data = JSON.parse(e.postData.contents);
    
    // Get the spreadsheet (use the FIRST sheet)
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheets()[0];
    
    // Add timestamp
    var timestamp = new Date();
    
    // Add row to sheet
    sheet.appendRow([
      timestamp,
      data.email,
      data.company,
      data.spend,
      Array.isArray(data.platforms) ? data.platforms.join(', ') : data.platforms,
      data.role
    ]);
    
    // Return success
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (err) {
    // Return error
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: err.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

// Test function - Run this to test
function test() {
  var testData = {
    postData: {
      contents: JSON.stringify({
        email: 'test@example.com',
        company: 'Test Co',
        spend: '$5-25k',
        platforms: ['Google Ads'],
        role: 'Founder'
      })
    }
  };
  
  var result = doPost(testData);
  Logger.log(result.getContent());
}
```

## Step 3: Deploy the Script

1. Click the **Deploy** button (top right) → **New deployment**
2. Click the gear icon ⚙️ → Select **Web app**
3. Configure:
   - **Description**: TruOpt.ai Waitlist API
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
4. Click **Deploy**
5. **Authorize** the script (you'll need to review permissions)
6. **Copy the Web App URL** (looks like: `https://script.google.com/macros/s/ABC123.../exec`)
7. **IMPORTANT**: Save this URL somewhere safe!

## Step 4: Update Your Environment Variables

1. In your Next.js project, create a `.env.local` file (if it doesn't exist)
2. Add your Google Apps Script URL:

```bash
NEXT_PUBLIC_WAITLIST_ENDPOINT=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

3. Replace `YOUR_SCRIPT_ID` with the actual URL you copied

## Step 5: Test the Integration

1. Restart your dev server: `npm run dev`
2. Go to `http://localhost:3000`
3. Fill out the waitlist form
4. Submit it
5. Check your Google Sheet - you should see a new row with the data!

## 🔒 Security Notes

- The Apps Script URL is safe to expose (it only accepts POST requests)
- No API keys needed
- Data goes straight to your private Google Sheet
- Only you can access the sheet (unless you share it)

## 📊 Bonus: View Your Data

Your Google Sheet now has all waitlist submissions with:
- Automatic timestamps
- Sortable/filterable data
- Easy export to CSV
- Can add charts/analytics
- Can set up email notifications

## 🚨 Troubleshooting

**If submissions aren't working:**
1. Check the browser console for errors
2. Make sure the `.env.local` file is created correctly
3. Restart your dev server after adding environment variables
4. Verify the Apps Script is deployed as "Anyone" can access
5. Check the Google Sheet permissions

**Common Issues:**
- **CORS errors**: Make sure the script is deployed as a Web App with "Anyone" access
- **No data in sheet**: Check the Apps Script execution logs (View → Executions)
- **Environment variable not loading**: Restart dev server, ensure it starts with `NEXT_PUBLIC_`
