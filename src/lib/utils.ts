const utils: Util[] = [
    {
        path: "server-jars",
        name: "Sunucu Jar Dosyaları",
        description: "Popüler sunucu yazılımlarını indirebilirsiniz!",
        shortDescription: "Sunucu yazılımlarını indirin",
        seoDescription: "Tüm sürümler için Minecraft sunucu jar dosyalarını anında indir: Vanilla, Fabric, Forge, CraftBukkit, Spigot, Paper, Purpur, Folia, BungeeCord, Waterfall ve Velocity. Kapsamlı jar koleksiyonumuzla Minecraft sunucu kurulumunuzu optimize edin."
    },
    {
        path: "inventory-slots",
        name: "Envanter Slotları",
        description: "Her çeşit envanter için slot numaralarını öğrenin!",
        shortDescription: "Tüm envanterler için slot",
        seoDescription: "Minecraft Bukkit envanter slot kimlikleri için eksiksiz rehber. Sandıklar, çift sandıklar, fırınlar, oyuncu envanterleri, köylü ticaretleri, iksir standları, işleme masaları ve daha fazlasını keşfedin. Minecraft eklenti geliştiricileri ve sunucu yöneticileri için vazgeçilmez bir kaynak."
    },
    {
        path: "item-ids",
        name: "Eşya ID'leri",
        description: "Oyun içerisindeki eşyaların ID'lerini aratın!",
        shortDescription: "Modern eşya ID'leri",
        seoDescription: "Kapsamlı Minecraft eşya kimlikleri veritabanı. Mevcut ve eski tüm eşya kimliklerini (veri değerleri) arayın ve keşfedin. Mod yapımcıları, eklenti geliştiricileri ve komut bloğu meraklıları için vazgeçilmez bir araç.",
    },
    {
        path: "start-file-generator",
        name: "Başlatma Dosyası Oluşturucu",
        description: "Farklı varyantlarda ve ayarlarda sunucu başlatma dosyaları oluşturun.",
        shortDescription: "Sunucu başlatma dosyası oluşturun",
        seoDescription: "Optimizasyonlu Minecraft sunucu başlatma dosyalarını anında oluşturun. Spigot/Paper sunucuları için özel start.bat veya start.command scriptleri oluşturun. RAM tahsisi ve proxy ayarları ile Aikar'ın performans artırıcı bayrakları dahil olmak üzere gelişmiş bayrakları yapılandırın."
    },
    {
        path: "ram-calculator",
        name: "RAM Hesaplayıcı",
        description: "Sunucunuz için önerilen RAM miktarını hesaplayın!",
        shortDescription: "Önerilen RAM miktarını hesaplayın",
        seoDescription: "Bir RAM hesaplayıcı ile Minecraft sunucu performansınızı optimize edin. Oyuncu sayısı ve yüklü eklentilere göre kesin bellek önerileri alın. Doğru RAM tahsisi ile sorunsuz oyun deneyimi sağlayın ve sunucu verimliliğini en üst düzeye çıkarın.",
    },
    {
        path: "server-info",
        name: "Sunucu Bilgisi",
        description: "Bir sunucunun güncel bilgilerini öğrenin!",
        shortDescription: "Sunucu bilgisini öğrenin",
        seoDescription: "Gerçek zamanlı Minecraft sunucu durumu kontrolcüsü. Anında canlı oyuncu sayısını, MOTD'yi ve sunucu simgelerini görüntüleyin. Favori Minecraft sunucularınızı izleyin veya kendi sunucunuzdaki sorunları kullanıcı dostu bir sunucu listesi görüntüleyicisi ile çözün."
    },
    {
        path: "skin-stealer",
        name: "Cilt Kopyalayıcı",
        description: "Bir oyuncunun cildini oyun içerisindeki ismine göre kopyalayın!",
        shortDescription: "Başkasının clidini kopyalayın",
        seoDescription: "Minecraft oyuncu skinlerini anında keşfedin ve indirin. Oyunda kullanılan isme göre arama yaparak herhangi bir oyuncunun benzersiz skinini görüntüleyin, kaydedin ve kullanın. Minecraft'ta ilham almak, cosplay yapmak veya yeni görünümler denemek için mükemmel bir araç.",
    },
    {
        path: "cape-stealer",
        name: "Pelerin Kopyalayıcı",
        description: "Bir oyuncunun pelerinini oyun içerisindeki ismine göre kopyalayın!",
        shortDescription: "Başkasının pelerinini kopyalayın",
        seoDescription: "Nadir Minecraft pelerinlerini keşfedin ve indirin. Mojang, Minecon ve Optifine pelerinlerini oyuncu adına göre bulun. Herhangi bir oyuncunun özel Minecraft pelerinlerini görüntüleyin, kaydedin ve beğenin. Pelerin meraklıları ve koleksiyoncular için ideal.",
    },
    {
        path: "color-codes",
        name: "Renk Kodları",
        description: "Tüm renkleri ve formatlarını öğrenin!",
        shortDescription: "Minecraft renk kodları",
        seoDescription: "Tam kapsamlı Minecraft renk kodları referans kılavuzu. Sohbet kodları (&), MiniMessage etiketleri, MOTD kodları ve hex değerlerine erişim sağlayın. Metin formatlama ve özelleştirme için kapsamlı renk kodu tablomuzla sunucunuzun görsel çekiciliğini artırın.",
    },
    {
        path: "color-text-generator",
        name: "Renkli Yazı Oluşturucu",
        description: "Renkli yazılar oluşturun ve kullanın!",
        shortDescription: "Renk kodları ile yazı oluşturun",
        seoDescription: "Renk kodu üreticimizle canlı Minecraft metinleri oluşturun. Sohbet, tabelalar, kitaplar, MOTD, eşya isimleri, eşya açıklamaları ve atma mesajlarında özel renkli mesajları önizleyin. Sınırsız yaratıcılık için hem standart renk kodlarını hem de özel hex değerlerini destekler.",
    },
    {
        path: "gradient-generator",
        name: "Gradyan Oluşturucur",
        description: "Oyun içi metin için iki renk arasında gradyan oluşturun!",
        shortDescription: "Gradyan oluşturun",
        seoDescription: "Minecraft metinleri için renk gradyanları tasarlayın, iki renk arasında pürüzsüz geçişler oluşturun. Eklentilerde kolay uygulama için anında Spigot ChatColor ve MiniMessage çıktıları alın.",
    },
    {
        path: "small-text-converter",
        name: "Küçük Yazı Font Düzenleyicisi",
        description: "Yazılarınızı küçük yazıya çevirin!",
        shortDescription: "Küçük fonta çevirin",
        seoDescription: "Minecraft metninizi şık küçük harflere dönüştürün. Normal metinleri MCCI, Mineclub, TubNet gibi popüler sunucularda kullanılan modaya uygun, kompakt yazı tipine dönüştürün. Kullanımı kolay küçük metin dönüştürücü ile sohbette, işaretlerde ve isimlerde öne çıkın.",
    },
    {
        path: "server-icon-converter",
        name: "Sunucu İkon Çeviricisi",
        description: "Görselinizi sunucu ikonuna uygun hale getirin!",
        shortDescription: "server-icon.png oluşturun",
        seoDescription: "Saniyeler içinde mükemmel Minecraft sunucu simgeleri oluşturun. Herhangi bir resmi yükleyin ve araç otomatik olarak gerekli 64x64 formatına yeniden boyutlandıracak ve server-icon.png olarak yeniden adlandıracaktır.",
    },
    {
        path: "unicode-symbols",
        name: "Unicode Sembolleri",
        description: "İzin verilen oyun içi unicode karakterlerin koleksiyonu!",
        shortDescription: "Tüm unicode'lar",
        seoDescription: "Yüzlerce Minecraft uyumlu Unicode sembolünü keşfedin. Sohbetinizi, GUI'lerinizi ve MOTD'lerinizi benzersiz karakterlerle geliştirin. Seçilmiş koleksiyon, tüm sembollerin oyun içinde doğru şekilde görüntülenmesini sağlar.",
    },
    {
        path: "note-block-songs",
        name: "Nota Blok Sesleri",
        description:
            "Bütün <a href='https://www.spigotmc.org/resources/noteblockapi.19287/' aria-label='NoteblockAPI' target='_blank' class='underline decoration-dotted'>nota blok seslerine erişin!</a>.",
        shortDescription: "En büyük nota bloğu ayarları",
        seoDescription: "Web'in en büyük Minecraft Nota Bloğu şarkı koleksiyonu. NoteBlockAPI ile uyumlu .nbs dosyalarını indirin. Minecraft sunucunuza veya haritanıza sürükleyici müzikler ekleyin. Projelerinizde anında kullanabileceğiniz binlerce şarkı.",
    },
    {
        path: "banner-creator",
        name: "Afiş Oluşturucu",
        description: "Bir afiş tasarımı oluşturun ve oyun içi komutlar ve kod alın!",
        shortDescription: "Afiş oluşturun",
        seoDescription: "Sezgisel bir oluşturucu ile özel Minecraft afişleri tasarlayın. Mevcut tüm renkler ve desenler arasından seçim yapın. Kolay uygulama için anında /give komutları ve Spigot API kodu alın. Sunucu markalama, takım bayrakları veya dekoratif projeler için mükemmeldir.",
    },
    {
        path: "daylight-cycle",
        name: "Gün Işığı Döngüsü",
        description: "Gerçek zamanı oyun zamanına dönüştürün!",
        shortDescription: "Zamanı dönüştürün",
        seoDescription: "Bir zaman dönüştürücü ile Minecraft'ın gün ışığı döngüsünde ustalaşın. Gerçek dünya zamanını oyun içi tiklere çevirin. Etkileşimli grafiğimizle gündüz-gece döngüsünü görselleştirin. Oyununuzu optimize edin ve zamana dayalı olayları hassasiyetle otomatikleştirin.",
    },
    {
        path: "firework-creator",
        name: "Havai Fişek Oluşturucu",
        description: "Havai Fişek oluşturun ve oyun içerisinden alın!",
        shortDescription: "Havai fişek oluşturun",
        seoDescription: "Özel bir içerik oluşturucu ile muhteşem Minecraft havai fişekleri oluşturun. Benzersiz patlamalar, efektler, renkler ve süreler tasarlayın. Yarattıklarınız için anında oyun içi komutlar ve üretim tarifleri alın. Kutlamalar, etkinlikler veya Minecraft dünyanıza hava katmak için mükemmel.",
    },
];

type Util = {
    path: string;
    name: string;
    description: string;
    shortDescription: string;
    seoDescription: string;
};

export const utilList = async () => {
    return utils;
};

export const findUtilByPath = async (path: string) => {
    for (const i in utils) {
        const util = utils[i];
        if (util.path == path) return util;
    }
    return undefined;
};
