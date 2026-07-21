import React from 'react'

export const RefundPolicyContentTR = () => {
    return (
        <div className="prose prose-invert max-w-none text-muted-foreground">
            <h1 className="text-3xl font-bold text-foreground mb-4">İade Politikası – TruOpt.ai</h1>
            <p className="text-sm mb-8">(Bir ThumbsAd Ürünüdür)</p>

            <p className="mb-6">
                <strong>Son Güncelleme:</strong> Temmuz 2026
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Yetkili Satıcı (Merchant of Record)</h2>
            <p className="mb-4">
                Sipariş süreçlerimiz çevrim içi yetkili satıcımız olan{' '}
                <a
                    href="https://www.paddle.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                >
                    paddle.com
                </a>{' '}
                tarafından yürütülmektedir.{' '}
                <a
                    href="https://www.paddle.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                >
                    Paddle.com
                </a>, tüm siparişlerimizin Yetkili Satıcısıdır (Merchant of Record). Paddle, tüm müşteri hizmetleri taleplerini ve iade işlemlerini yönetmektedir.
            </p>

            <hr className="border-muted-foreground/20 my-8" />

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">İade İşlemleri</h2>
            <p className="mb-4">
                İadeler, Paddle Alıcı Şartları'na (Buyer Terms) uygun olarak işlenmektedir. Bir tüketici olarak, yürürlükteki yerel kanunlar ve Paddle politikaları çerçevesinde satın alma tarihinden itibaren 14 gün içinde iade talebinde bulunma hakkınız vardır.
            </p>
            <p className="mb-8">
                Paddle şartlarında belirtilenlerin ötesinde iadeler için ek bir kısıtlama veya şart uygulamamaktayız.
            </p>

            <hr className="border-muted-foreground/20 my-8" />

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">İade Talebi Nasıl Oluşturulur?</h2>
            <p className="mb-4">
                Paddle yetkili satıcı olduğu için, tüm iade ve iptal taleplerinin doğrudan Paddle üzerinden iletilmesi gerekmektedir. Paddle ile{' '}
                <a
                    href="https://www.paddle.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                >
                    paddle.net
                </a>{' '}
                üzerinden iletişime geçebilir veya satın alma onay e-postanızdaki talimatları takip edebilirsiniz.
            </p>
            <p className="mb-8">
                Satın alma işleminiz için geçerli olan iade politikasının tüm detayları için lütfen Paddle Alıcı Şartları'nı inceleyin:{' '}
                <a
                    href="https://www.paddle.com/legal/checkout-buyer-terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                >
                    https://www.paddle.com/legal/checkout-buyer-terms
                </a>
            </p>

            <hr className="border-muted-foreground/20 my-8" />

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Abonelik İptali</h2>
            <p className="mb-4">
                Aboneliğinizi dilediğiniz zaman iptal edebilirsiniz. İptal işlemi, mevcut faturalandırma döneminin sonunda yürürlüğe girecektir.
            </p>
        </div>
    )
}
