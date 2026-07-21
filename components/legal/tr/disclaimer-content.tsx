import React from 'react'

export const DisclaimerContentTR = () => {
    return (
        <div className="prose prose-invert max-w-none text-muted-foreground">
            <h1 className="text-3xl font-bold text-foreground mb-2">Sorumluluk Reddi – TruOpt.ai</h1>
            <p className="mb-8 font-medium text-foreground">Son güncelleme: Temmuz 2026</p>

            <p className="mb-6">
                ThumbsAd ve TruOpt.ai platformları aracılığıyla sunulan içerik, yazılım, gösterge panelleri (dashboards), yapay zeka motorları, raporlar ve otomasyon sistemleri yalnızca genel bilgilendirme ve otomasyon desteği amacıyla sunulmaktadır.
            </p>
            <p className="mb-6">
                ThumbsAd – Deniz Tekbaş (“ThumbsAd”, “biz”, “bizim”), iş performansı, reklam sonuçları, gelir, dönüşümler, potansiyel müşteri kazanımı (lead generation), ROAS veya kârlılık konusunda hiçbir garanti vermemektedir.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. Garanti Yoktur ve Profesyonel Tavsiye Niteliğinde Değildir</h2>
            <p className="mb-4">
                TruOpt.ai finansal, hukuki, pazarlama veya yatırım tavsiyesi vermez.
                <br />
                Yapay zeka tarafından üretilen tüm içgörüler, öneriler ve otomatik eylemler; geçmiş ve anlık verilere dayanan algoritmik çıktılardır ve kesin sonuç garantisi içermez.
            </p>
            <p className="mb-4">Aşağıdakilerden yalnızca siz sorumlusunuz:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Reklam hesaplarınız</li>
                <li>Bütçeleriniz ve ödemeleriniz</li>
                <li>Reklam platformu politikalarına uyumunuz</li>
                <li>İş kararlarınızın nihai onayı</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Yapay Zeka Otomasyonu Sorumluluk Reddi</h2>
            <p className="mb-4">Aşağıdaki hususları kabul etmektesiniz:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Otomatik eylemler yapay zeka sistemleri tarafından yürütülür</li>
                <li>Kampanya performansı harici pazar koşullarından etkilenir</li>
                <li>TruOpt.ai; hesap askıya alınmaları, reklam reddedilmeleri, performans düşüşleri, gelir kaybı veya iş duraksamalarından sorumlu tutulamaz</li>
            </ul>
            <p className="mb-6">
                TruOpt.ai platformunun kullanımı tamamen kendi sorumluluğunuzdadır.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Üçüncü Taraf Hizmetleri</h2>
            <p className="mb-4">
                TruOpt.ai; Google Ads ve analitik sağlayıcıları gibi üçüncü taraf platformlarla entegre çalışır.
                <br />
                ThumbsAd'in bu platformların erişilebilirliği, veri politikaları veya yaptırım kararları üzerinde hiçbir kontrolü yoktur.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Sorumluluğun Sınırlandırılması</h2>
            <p className="mb-6">
                Kanunların izin verdiği azami ölçüde ThumbsAd; TruOpt.ai veya ilgili hizmetlerin kullanımından doğabilecek doğrudan, dolaylı, arızi, cezai veya sonuçsal zararlardan sorumlu tutulamaz.
            </p>

            <div className="border-t border-border pt-8 mt-12">
                <h2 className="text-xl font-semibold text-foreground mb-4">İletişim</h2>
                <p className="font-semibold text-foreground mb-1">ThumbsAd – Deniz Tekbaş</p>
                <p className="mb-1">Adres: Esentepe Mah. Büyükdere Cad. Loft Residence No: 201 / 40 Şişli, İstanbul, Türkiye</p>
                <p className="mb-1">E-posta: <a href="mailto:info@thumbsad.com" className="text-primary hover:underline">info@thumbsad.com</a></p>
                <p className="mb-4">Telefon: <a href="tel:+908503035772" className="text-primary hover:underline">+90 850 303 57 72</a></p>
            </div>
        </div>
    )
}
