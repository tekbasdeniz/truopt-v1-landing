import React from 'react'

export const RefundPolicyContentTR = () => {
    return (
        <div className="prose prose-invert max-w-none text-muted-foreground">
            <h1 className="text-3xl font-bold text-foreground mb-2">İade ve İptal Politikası – TruOpt.ai</h1>
            <p className="mb-8 font-medium text-foreground">Son güncelleme: 15 Ekim 2026</p>

            <p className="mb-6 leading-relaxed">
                TruOpt.ai, ThumbsAd – Deniz Tekbaş tarafından geliştirilen bir abonelik hizmetidir. Ödeme ve sipariş süreçlerinde Paddle, kayıtlı satıcı (Merchant of Record) olarak görev yapabilir.
            </p>

            <div className="space-y-4 mb-8 text-foreground/90">
                <p>
                    <strong className="text-foreground">1. Abonelik:</strong> Ücretler seçilen aylık veya yıllık döneme göre peşin tahsil edilir.
                </p>
                <p>
                    <strong className="text-foreground">2. İptal:</strong> Aboneliğinizi dilediğiniz zaman iptal edebilirsiniz. İptal, mevcut faturalandırma döneminin sonunda geçerli olur ve gelecek yenilemeler durdurulur.
                </p>
                <p>
                    <strong className="text-foreground">3. İadeler ve cayma hakları:</strong> İade talepleri Paddle Satın Alıcı Koşulları ve uygulanabilir zorunlu tüketici mevzuatı çerçevesinde değerlendirilir. Kanuni cayma ve diğer tüketici hakları saklıdır. Dijital hizmete erişim veya hizmetin başlaması, ilgili hukuk kapsamında cayma hakkını etkileyebilir; bu durum ödeme sırasında açıkça belirtilmelidir.
                </p>
                <p>
                    <strong className="text-foreground">4. Talep yöntemi:</strong> İade veya abonelik talepleri için satın alma onay e-postanızdaki yönergeleri izleyin ya da{' '}
                    <a href="https://paddle.net" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        https://paddle.net
                    </a>{' '}
                    üzerinden Paddle destek ekibine başvurun.
                </p>
                <p>
                    <strong className="text-foreground">5. Referans:</strong>{' '}
                    <a href="https://www.paddle.com/legal/checkout-buyer-terms" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        https://www.paddle.com/legal/checkout-buyer-terms
                    </a>
                </p>
            </div>

            <div className="pt-4 border-t border-border">
                <p className="text-sm">İletişim: info@thumbsad.com</p>
            </div>
        </div>
    )
}