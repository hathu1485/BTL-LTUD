//Khoi tao danh sach san pham
function createProduct() {
    if (localStorage.getItem('products') == null) {
        let products = [{
            id: 1,
            status: 1, 
            title: 'Dây chuyền kim cương',
            img: './assets/img/products/nam-dui-ga-chay-toi.jpeg',
            category: 'Dây chuyền',
            price: 9000000,
            desc: 'Hơn cả một món trang sức, đây là một biểu tượng trường tồn, một tuyệt tác vượt thời gian mà bạn sẽ trân trọng suốt đời. Chiếc vòng cổ vàng nguyên khối 14k ôm trọn viên kim cương огранки tròn ethically sourced, tỏa sáng rạng ngời trong ореол bezel tinh tế.'
        },
        {
            id: 2,
            status: 1, 
            title: 'Dây chuyền vệ tinh',
            img: './assets/img/products/rau-xao-ngu-sac.png',
            category: 'Dây chuyền',
            price: 3300000,
            desc: 'Chiếc vòng cổ dễ thương nhất mà bạn từng sở hữu. Được làm thủ công bằng vermeil, một lớp vàng 18k dày trên bạc sterling với đá sapphire trắng. Một món đồ sẽ phù hợp với áo phông hoặc váy dự tiệc yêu thích của bạn.'
        },
        {
            id: 3,
            status: 1, 
            title: 'Dây chuyền Sapphire nổi',
            img: './assets/img/products/banh_lava_pho_mai_nuong.jpeg',
            category: 'Dây chuyền',
            price: 3300000,
            desc: 'Viên sapphire lấp lánh, tựa như một vì sao đêm được chạm khắc tinh xảo, sẽ biến món trang sức này thành tâm điểm của mọi ánh nhìn, thu hút mọi sự chú ý vào vẻ đẹp quyến rũ của bạn.'
        },
        {
            id: 4,
            status: 1, title: 'Dây chuyền Topaz tròn',
            img: './assets/img/products/lau_thai.jpg',
            category: 'Dây chuyền',
            price: 2500000,
            desc: 'Hãy dành tặng người ấy một món trang sức mới mẻ tinh tế, sang trọng và rõ ràng phù hợp với mọi thứ họ đang sở hữu. Mỗi thiết kế được chế tác thủ công bằng vàng vermeil 18k, nổi bật với viên đá topaz cắt tròn lấp lánh một điểm nhấn nhẹ nhàng nhưng đầy cuốn hút cho mọi phong cách.

'
        },
        {
            id: 5,
            status: 1, 
            title: 'Dây chuyền Baguette nhiều lớp',
            img: './assets/img/products/com_chien_cua.png',
            category: 'Dây chuyền',
            price: 3800000,
            desc: 'Bạn sẽ nhận được gì khi kết hợp đá quý yêu thích với kiểu cắt yêu thích của mình? Tất nhiên là chiếc vòng cổ nhiều lớp trong mơ của bạn rồi. Thiết kế này mang đậm dấu ấn cá nhân, nổi bật và tinh tế, phù hợp cho cả những khoảnh khắc đời thường lẫn những dịp đặc biệt.'
        },

        {
            id: 6,
            status: 1, 
            title: 'Vòng cổ ngọc trai Sloan',
            img: './assets/img/products/sup-bao-ngu-hai-sam.jpeg',
            category: 'Dây chuyền',
            price: 12500000,
            desc: 'Một tác phẩm nghệ thuật với ngọc trai và mắt xích bạc cong. Vòng cổ ngọc trai Sloan sẽ đồng hành cùng bạn khi ra phố. Những viên ngọc trai nút có nhiều kích cỡ khác nhau nằm phẳng trên ngực bạn và phản chiếu ánh sáng để bạn thu hút mọi ánh nhìn. Được tạo ra để khiến bạn cảm thấy đặc biệt.'
        },

        {
            id: 7,
            status: 1, 
            title: 'Nhẫn kim cương',
            category: 'Nhẫn',
            img: './assets/img/products/tai-cuon-luoi.jpeg',
            price: 10000000,
            desc: 'Thiết kế tinh tế nhất mà bạn từng thấy. Chiếc nhẫn này kết hợp hoàn hảo với bất kỳ mẫu nhẫn Stacker nào của chúng tôi và dễ dàng nâng cấp mọi trang phục, từ giản dị đến trang trọng. Một điểm nhấn nhỏ nhưng đủ sức tạo nên sự khác biệt.'
        },

        {
            id: 8,
            status: 1, 
            title: 'Nhẫn hình vòm',
            img: './assets/img/products/xiu_mai_tom_thit_10_vien.jpg',
            category: 'Nhẫn',
            price: 2500000,
            desc: 'Một tác phẩm mở và hấp dẫn lấy cảm hứng từ chuyển động chậm rãi, có chủ đích. Mỗi đường cong phản ánh góc độ độc đáo của riêng nó và của bạn.'
        },

        {
            id: 9,
            status: 1, 
            title: 'Nhẫn kim cương nhân tạo',
            category: "Nhẫn",
            img: './assets/img/products/tra-pho-mai-kem-sua.jpg',
            price: 3800000,
            desc: 'Hai thì tốt hơn một. Với vành bezel, những viên kim cương Kimberly Process 0,03 carat này sẽ nhảy múa. Thiết kế mở khiến chiếc nhẫn này nổi bật ngay cả khi xếp chồng lên nhau, như Stacker, Twist hoặc Beaded Rings.',
        },
        {
            id: 10,
            status: 1, 
            title: 'Bộ nhẫn xếp chồng Wishbone',
            category: "Nhẫn",
            img: './assets/img/products/tra-dao-chanh-sa.jpg',
            price: 10200000,
            desc: 'Bộ nhẫn xếp chồng Wishbone mang đến vẻ thanh lịch tối giản nhưng đầy cuốn hút. Dù đeo riêng lẻ hay kết hợp cùng nhau, chúng đều tỏa sáng theo cách riêng biệt và nâng tầm mọi phong cách.',
        },
        {
            id: 11,
            status: 1, 
            title: 'Nhẫn hạt',
            category: 'Nhẫn',
            img: './assets/img/products/banh-chuoi-nuong.jpeg',
            price: 3300000,
            desc: 'Chiếc nhẫn đính hạt này tạo nên một tuyên bố đủ nổi bật để đeo một mình, nhưng cũng linh hoạt để kết hợp cùng những món khác. Được chế tác thủ công từ vàng trắng 14k mạ rhodium, với độ dày 1,3 mm, chiếc nhẫn đủ bền để đồng hành cùng bạn trong mọi hành trình.'
        },
        {
            id: 12,
            status: 1, 
            title: 'Nhẫn ống hỗn hợp',
            img: './assets/img/products/ha_cao.jpg',
            category: 'Nhẫn',
            price: 2500000,
            desc: 'Một bài học tinh tế về sự tương phản với thiết kế ống kim loại hỗn hợp với hai chiều rộng và hai tông màu mang đến vẻ ngoài độc đáo, đầy cá tính. Được chế tác thủ công từ vàng vermeil 18k và bạc nguyên chất, mẫu trang sức này cho phép bạn thoải mái thể hiện phong cách riêng bằng cách xếp chồng các chất liệu yêu thích ở vị trí trung tâm.'
        },
        {
            id: 13,
            status: 1, 
            title: 'Khuyên tai vòng Deia',
            img: './assets/img/products/thit_nuong.jpg',
            category: 'Khuyên tai',
            price: 4000000,
            desc: 'Lấp lánh vừa đủ, tinh tế đúng lúc – hoa tai vòng Deia là điểm nhấn hoàn hảo cho mọi phong cách. Với thiết kế mảnh nhẹ, đường cong mềm mại và độ sáng nổi bật, Deia mang đến cảm giác thanh lịch nhưng không hề đơn điệu.'
        },
        {
            id: 14,
            status: 1, 
            title: 'Khuyên tai xoắn ốc xoay độc đáo ',
            img: './assets/img/products/nom_ga_hoi_an.png',
            category: 'Khuyên tai',
            price: 2500000,
            desc: 'Khác biệt từ cái nhìn đầu tiên – đôi hoa tai xoắn ốc với cơ chế xoay độc đáo mang đến một trải nghiệm đeo mới lạ và cuốn hút. Thiết kế xoắn mềm mại ôm sát tai, tạo cảm giác hiện đại, tinh tế nhưng vẫn đầy cá tính.'
        },
        {
            id: 15,
            status: 1, 
            title: 'Khuyên tai giọt nước đôi ',
            img: './assets/img/products/set_bun_ca.jpg',
            category: 'Khuyên tai',
            price: 1800000,
            desc: 'Khuyên tai giọt nước đôi mang đến vẻ đẹp mềm mại và thanh thoát với hai tầng giọt nước chuyển động tinh tế theo từng cử chỉ. Thiết kế nhẹ nhàng nhưng đầy điểm nhấn, lý tưởng để tô điểm cho phong cách hàng ngày hoặc thêm phần nổi bật trong những dịp đặc biệt.'
        },
        {
            id: 16,
            status: 1, 
            title: 'Khuyên tai vòng xoắn bạc Nappa',
            img: './assets/img/products/set_bun_ca.jpg',
            category: 'Khuyên tai',
            price: 2000000,
            desc: 'Khuyên tai vòng xoắn bạc Nappa nổi bật với thiết kế tinh tế và đường xoắn mềm mại, tạo nên vẻ đẹp hiện đại đầy cuốn hút. Chất liệu bạc sáng bóng kết hợp cùng kiểu dáng độc đáo giúp bạn dễ dàng phối hợp với mọi phong cách, từ năng động thường ngày đến những dịp đặc biệt.'
        },
        {
            id: 17,
            status: 1, 
            title: 'Khuyên tai vòng cong kim cương bạc',
            img: './assets/img/products/bun_ca_hanh_phi.jpeg',
            category: 'Khuyên tai',
            price: 3500000,
            desc: 'Vẻ đẹp thanh lịch với một chút lấp lánh, khuyên tai vòng cong kim cương bạc là điểm nhấn hoàn hảo cho mọi phong cách. Được chế tác từ bạc sáng bóng và đính đá CZ tinh xảo, thiết kế uốn cong mềm mại ôm sát tai tạo cảm giác vừa hiện đại vừa nữ tính.'
        },
        {
            id: 18,
            status: 1, 
            title: 'Khuyên tai đinh tán nút bạc',
            img: './assets/img/products/tom_su_luot_ran_thit.png',
            category: 'Khuyên tai',
            price: 1200000,
            desc: 'Khuyên tai đinh tán nút bạc mang đến vẻ đẹp hiện đại với thiết kế tối giản và tinh tế. Kiểu dáng nhỏ gọn, dễ đeo hàng ngày nhưng vẫn đủ nổi bật để tạo điểm nhấn cho phong cách của bạn.'
        },
        {
            id: 19,
            status: 1, 
            title: 'Vòng tay xích mỏ neo',
            img: './assets/img/products/banh_cookie_dua.jpeg',
            category: 'Vòng tay',
            price: 4500000,
            desc: 'Được làm thủ công bằng vàng nguyên khối 14k, chiếc vòng này được đặt tên theo cách các mắt xích kết nối với nhau giống như một sợi dây xích của tàu giữ một mỏ neo.'
        },
        {
            id: 20,
            status: 1, 
            title: 'Vòng tay hoa sen',
            img: './assets/img/products/sot_mam_thai.jpeg',
            category: 'Vòng tay',
            price: 2500000,
            desc: 'Vòng tay hoa sen được chế tác từ vàng Vermeil 18k, kết hợp cùng đá sapphire trắng tinh khiết, mang đến vẻ đẹp thanh khiết và đầy ý nghĩa. Hình ảnh hoa sen tượng trưng cho sự thanh cao và bình an, là món trang sức nhẹ nhàng nhưng giàu cảm xúc, lý tưởng để đeo mỗi ngày hoặc dành tặng người bạn trân quý.'
        },
        {
            id: 21,
            status: 1, 
            title: 'Vòng tay mắt quỷ kim cương Pavé',
            category: 'Vòng tay',
            img: './assets/img/products/tom-su-rang-muoi.jpeg',
            price: 7000000,
            desc: 'Biểu tượng mắt ác mang ý nghĩa sâu sắc trong nhiều nền văn hóa, được tin là có khả năng bảo vệ người đeo khỏi sự đố kỵ và năng lượng tiêu cực. Với hình ảnh đặc trưng, nó được cho là phản chiếu và bẻ cong điều xấu trở lại nơi nó bắt nguồn, như một lá bùa hộ mệnh vừa bí ẩn vừa mạnh mẽ.'
        },
        {
            id: 22,
            status: 1, 
            title: 'Vòng tay Pavé Diamond Sunburst',
            category: 'Vòng tay',
            img: './assets/img/products/tom-su-rang-bo-toi.jpeg',
            price: 4500000,
            desc: 'Vòng tay Pavé Diamond Sunburst là sự kết hợp rực rỡ giữa vàng 14k và những viên kim cương thiên nhiên lấp lánh. Lấy cảm hứng từ ánh mặt trời tỏa sáng, thiết kế pavé tinh xảo tạo nên hiệu ứng lấp lánh nổi bật, mang đến cảm giác ấm áp, sang trọng và đầy năng lượng tích cực cho người đeo.'
        },

        {
            id: 23,
            status: 1, 
            title: 'Vòng tay Geo Station',
            category: 'Vòng tay',
            img: './assets/img/products/combo-vitquay-va-goivit.jpeg',
            price: 5600000,
            desc: 'Phá vỡ sự bình thường. Vòng tay Geo Station có viên đá Topaz xanh London được gắn trên kim loại mô phỏng hình dạng và mặt cắt của đá quý thô.'
        },

        {
            id: 24,
            status: 1, 
            title: 'Vòng tay chuỗi Serpentine',
            img: './assets/img/products/set_ca_tam.jpg',
            category: 'Vòng tay',
            price: 950000,
            desc: 'Thanh thoát, quyến rũ và nổi bật—mọi thứ bạn cần trong một sợi dây chuyền có mắt xích dẹt, một được thiết kế để bạn thoải mái đeo cả ngày.'
        },
        {
            id: 25,
            status: 1, 
            title: 'Chả ốc 1 phần',
            img: './assets/img/products/cha_oc_1_phan.jpeg',
            category: 'Vòng tay',
            price: 350000,
            desc: 'Chả ốc với ốc giòn tan, băm rối, trộn với thịt, lá lốt, rau thơm, nêm nếm vừa ăn và viên tròn, chiên cho giòn ngoài mềm trong. Ăn chả ốc kẹp với rau sống và chấm mắm chua ngọt cực kỳ đưa vị.'
        },

        {
            id: 26,
            status: 1, 
            title: 'Gà ủ muối thảo mộc (1 con)',
            category: 'Món mặn',
            img: './assets/img/products/ga-u-muoi-thao-moc.png',
            price: 450000,
            desc: 'Gà ủ muối tuyển chọn từ gà ri tươi, ủ muối chín tới với gia vị thảo mộc tự nhiên, da gà mỏng, thịt chắc ngọt.'
        },

        {
            id: 27,
            status: 1, 
            title: 'Gà không lối thoát (1 con)',
            category: 'Món mặn',
            img: './assets/img/products/ga-khong-loi-thoat.png',
            price: 520000,
            desc: 'Gà mái ghẹ size 1.4kg sơ chế sạch sẽ, tẩm ướp gia vị đậm đà, bọc vào trong xôi dẻo từ nếp cái hoa vàng, chiên cho giòn mặt ngoài. Khi ăn cắt phần xôi là gà thơm ngon nghi ngút khói, thịt gà ngấm mềm thơm, miếng xôi ngọt tự nhiên từ thịt gà ăn cực kỳ hấp dẫn.'
        },

        {
            id: 28,
            status: 1, 
            title: 'Cá chiên giòn mắm Thái (1 con)',
            category: 'Món mặn',
            img: './assets/img/products/ca-chien-gion-mam-thai.jpeg',
            price: 350000,
            desc: 'Cá tươi bếp làm sạch, lạng đôi, ướp cho ngấm và chiên vàng giòn. Thịt cá bên trong óng ánh nước, mềm ngọt, bên ngoài giòn tan hấp dẫn. Thêm sốt mắm Thái đầu bếp làm công thức riêng, vị mắm chua ngọt cay the cực kỳ hợp với cá giòn nóng hổi.'
        },

        {
            id: 29,
            status: 1, 
            title: 'Chân giò chiên giòn mắm Thái',
            category: 'Món mặn',
            img: './assets/img/products/chan-gio-chien-gion-mam-thai.jpeg',
            price: 420000,
            desc: 'Chân giò lợn đen chọn loại ngon, tỉ lệ nạc mỡ đều đặn, bếp xâm bì cẩn thận và ướp thật ngon, chiên vàng giòn nổi bóng, khi ăn chấm mắm chua ngọt cay cay cực kỳ ngon miệng.'
        },

        {
            id: 30,
            status: 1, 
            title: 'Chả cốm (500gr)',
            category: 'Món mặn',
            img: './assets/img/products/cha-com.png',
            price: 175000,
            desc: 'Cốm mộc làng Vòng hạt dẹt dẻo và thơm đặc biệt, thịt lợn tươi phải chọn phần thịt vai xay vừa mềm lại không bở, trộn đều với cốm, nêm với mắm ngon, gia vị đơn giản và quật hỗn hợp thịt xay và cốm đến khi nào thật chắc và dẻo. Viên mỗi bánh chả phải đều tay, hấp sơ qua cho thành hình, khi ăn mới chiên vàng. Chả cốm khi cắn vào phải giòn và lại thật mềm, tứa nước trong miệng. Cốm dẻo dẻo cuộn trong thịt thơm ngon lạ kỳ.'
        },

        {
            id: 31,
            status: 1, 
            title: 'Vịt om sấu (1 hộp)',
            category: 'Món mặn',
            img: './assets/img/products/vit-om-sau.jpeg',
            price: 350000,
            desc: '[Mỗi phần có 1,2kg thịt vịt]. Vịt om sấu với thịt vịt mềm thơm, nấu với trái sấu, sả cây, ớt tươi cho ra phần nước om chua thanh và rất thơm. Dùng vịt om sấu với rau mùi tàu, rau thơm và bún rất ngon.'
        },

        {
            id: 32,
            status: 1, 
            title: 'Giò xào (1kg)',
            category: 'Món mặn',
            img: './assets/img/products/gio-xao.jpeg',
            price: 460000,
            desc: 'Giò xào Bếp Hoa đặc biệt được xào khô, ép chặt để tạo độ giòn. Nguyên liệu chính được làm từ tai và lưỡi heo. Khi ăn giò xào, bạn sẽ cảm nhận từng miếng giò vừa giòn vừa thơm lừng mùi tiêu đen và nước mắm.'
        },

        {
            id: 33,
            status: 1, 
            title: 'Nem tai (1 hộp)',
            category: 'Món mặn',
            img: './assets/img/products/nem-tai.jpeg',
            price: 200000,
            desc: 'Nem tai giòn sần sật, trộn với thính gạo rang thơm, ăn kèm lá sung bùi bùi, chấm tương ớt hoặc nước chấm đặc điệt, công thức chỉ riêng Bếp Hoa có.'
        },

        {
            id: 34,
            status: 1, 
            title: 'Canh dưa bò hầm (1 hộp)',
            category: 'Món mặn',
            img: './assets/img/products/canh-dua-bo-ham.jpeg',
            price: 270000,
            desc: 'Canh dưa chua hầm nhừ với thịt nạm bò và gân bò. Thơm - ngon - ngọt - béo - chua dịu thanh thanh'
        },

        {
            id: 35,
            status: 1, 
            title: 'Nạc nọng heo nướng kèm xôi trắng (500gr)',
            category: 'Món mặn',
            img: './assets/img/products/nac-nong-heo-nuong-kem-xoi-trang.jpeg',
            price: 300000,
            desc: 'Nọng heo - phần thịt ngon nhất trên thủ heo, với những dải thịt nạc mỡ đan xen, mỗi thủ chỉ có được 1-2kg thịt nọng ngon mềm như vậy. Bếp trưởng Bếp Hoa tẩm ướp thật ngấm gia vị, nướng thẳng trên than hoa thơm nức, xém cạnh đẹp mắt. Miếng thịt nướng xong gắp khỏi vỉ vẫn thấy mỡ thơm còn sôi trên dải thịt, để thịt nghỉ vài phút khi thái ra óng ánh nước, gắp miếng thịt chấm với nước sốt siêu ngon độc quyền của Bếp, ngon đến tứa nước miếng, tranh nhau gắp sạch đĩa'
        },

        {
            id: 36,
            status: 1, 
            title: 'Thịt quay (400gr)',
            category: 'Món mặn',
            img: './assets/img/products/thit-quay.jpeg',
            price: 280000,
            desc: 'Thịt lợn quay thơm mùi lá mắc mật. Ngoài bì giòn rụm, thịt bên trong mềm, hương vị đậm đà. Đặc biệt, bếp có loại sốt chấm thịt được pha bằng công thức riêng biệt chỉ Bếp Hoa mới có.Hướng dẫn sử dụng: Sử dụng ngay trong ngày. Bảo quản trong tủ mát.'
        },

        {
            id: 37,
            status: 1, 
            title: 'Khâu nhục',
            category: 'Món mặn',
            img: './assets/img/products/khau-nhuc.jpeg',
            price: 280000,
            desc: 'Khâu nhục - món ăn cầu kỳ mang phong vị phương Bắc. Làm từ thịt lợn ta, khâu khục được hấp cách thủy trong 6 tiếng cùng với rất nhiều loại gia vị. Thịt mềm nhừ, ngọt vị, phần bì trong và dẻo quẹo. Mỡ ngậy ngậy tan chảy ngay khi vừa đưa lên miệng. Hướng dẫn bảo quản: Hâm nóng lại bằng nồi hấp cách thủy hoặc lò vi sóng. Bảo quản trong tủ mát từ 3-5 ngày.'
        },
        {
            id: 38,
            status: 1, 
            title: 'Xíu mại tôm thịt ( 10 viên)',
            category: 'Món mặn',
            img: './assets/img/products/ha_cao_tom_thit.jpg',
            price: 140000,
            desc: 'Những miếng há cảo, sủi cảo, hoành thánh với phần nhân tôm, sò điệp, hải sản tươi ngon hay nhân thịt heo thơm ngậy chắc chắn sẽ khiến bất kỳ ai thưởng thức đều cảm thấy rất ngon miệng.'
        },
        {
            id: 39,
            status: 1, 
            title: 'Chè hương cốm lá dứa',
            category: 'Món tráng miệng',
            img: './assets/img/products/che-com-la-dua.jpeg',
            price: 60000,
            desc: 'Chè cốm hương lá dứa dẻo thơm, ngọt dịu, từng hạt cốm thoảng thoảng đâu đó hương lá dứa mát lành'
        },

        {
            id: 40,
            status: 1, 
            title: 'Bánh bông lan chanh dây',
            category: 'Món tráng miệng',
            img: './assets/img/products/banh-bong-lan-chanh-day.jpeg',
            price: 50000,
            desc: 'Bánh bông lan chanh dây với vị chua nhẹ, không bị ngọt gắt hẳn sẽ là sự lựa chọn hoàn hảo'
        },

        {
            id: 41,
            status: 1, 
            title: 'Chè bưởi',
            category: 'Món tráng miệng',
            img: './assets/img/products/che-buoi.jpeg',
            price: 50000,
            desc: 'Chè bưởi rất dễ ăn bởi hương vị ngọt mát, thơm ngon, vị bùi bùi của đậu xanh, giòn sần sật của cùi bưởi mà không hề bị đắng'
        },
        {
            id: 42,
            status: 1, 
            title: 'Set lẩu Thái tomyum',
            category: "Món lẩu",
            img: './assets/img/products/lau-thai-tomyum.jpeg',
            price: 699000,
            desc: 'Lẩu Thái là món ăn xuất phát từ món canh chua Tom yum nổi tiếng của Thái Lan. Nước lẩu có hương vị chua chua cay cay đặc trưng. Các món nhúng lẩu gồn thịt bò, hải sản, rau xanh và các loại nấm.',
        },
        {
            id: 43,
            status: 1, 
            title: 'Set lẩu Thái nấm chay',
            category: "Món lẩu",
            img: './assets/img/products/lau-thai-nam-chay.png',
            price: 550000,
            desc: 'Một set lẩu Thái nấm chay với nước dùng 100% từ rau củ quả tự nhiên, thêm sả cây tươi, riềng miếng, ớt, nước dừa để lên được vị nước lẩu Thái chuẩn vị. Đồ nhúng đa dạng với nhiều loại nấm khác nhau, rau tươi giòn, đậu phụ mềm xốp, váng đậu amla chiên giòn. Kèm bún tươi ăn rất hợp.',
        },
        {
            id: 44,
            status: 1, 
            title: 'Đậu hũ xào nấm chay',
            category: "Món chay",
            img: './assets/img/products/dau-hu-xao-nam-chay.png',
            price: 220000,
            desc: 'Món xào thanh nhẹ ngọt lịm từ rau củ và nấm tươi, thêm chút đậu phụ chiên thái miếng, nêm nếm đậm đà. Ăn kèm cơm trắng hay làm bún trộn rau củ cũng rất hợp.',
        },
        {
            id: 45,
            status: 1, 
            title: 'Bún trộn chay (1 suất)',
            category: "Món chay",
            img: './assets/img/products/bun-tron-chay.png',
            price: 75000,
            desc: 'Bún trộn chay tưởng là quen mà ăn ngon lạ miệng. Với bún tươi được trộn với nước tương và sốt ớt đặc biệt, mắm chay thơm, thêm rau củ tươi, rau thơm bắt vị, nấm xào săn, đậu phụ thái lát, một món thanh nhẹ thích hợp ăn trưa hoặc để dành cho anh chị eat-clean bữa tối.',
        },
        {
            id: 46,
            status: 1, 
            title: 'Bún riêu chay (1 suất)',
            category: "Món chay",
            img: './assets/img/products/bun-rieu-chay.png',
            price: 75000,
            desc: 'Bún riêu chay với phần gạch cua chay từ đậu phụ non mềm đánh với sốt màu thơm ngon. Nước dùng thanh nhẹ từ rau củ quả, được nấu lên vị đậm đà rất ngon miệng. Một phần bún riêu kèm với gạch cua là giò chay, đậu phụ rán, rau sống ngọt giòn và tương ớt chay sánh ngon.',
        },
        {
            id: 47,
            status: 1, 
            title: 'Miến xào rau củ chay',
            category: "Món chay",
            img: './assets/img/products/mien-xao-rau-cu-chay.png',
            price: 170000,
            desc: 'Sợi miến khoai lang bếp ngâm cho mềm, xào kèm rau củ quả tươi theo mùa, nêm cùng nước tương và dầu mè, một món xào chay vừa mát lành lại thơm ngon.',
        },
        {
            id: 48,
            status: 1, 
            title: 'Cuốn nấm chay (10 cuốn)',
            category: "Món chay",
            img: './assets/img/products/cuon-nam-chay.png',
            price: 120000,
            desc: 'Nấm tươi làm chín cuộn với bánh phở và rau bào, thêm đậu phụ chiên giòn thái chân hương đưa vị, chấm mắm chua ngọt chay bếp trưởng pha chế, một món ngon làm món khai vị rất hợp.',
        },
        {
            id: 49,
            status: 1, 
            title: 'Xôi xéo',
            category: "Món chay",
            img: './assets/img/products/xoi-xeo.png',
            price: 80000,
            desc: 'Xôi xéo đậu xanh bếp dùng nếp cái hoa vàng hạt mẩy, ngâm với nước nghệ và đồ 2 lần cho hạt nếp chín mềm và thơm, đậu xanh sên mịn cắt tơi trộn cùng xôi, khi ăn rắc hành phi đưa vị, rất hấp dẫn.',
        },
        {
            id: 50,
            status: 1, 
            title: 'Chả quế chay',
            category: "Món chay",
            img: './assets/img/products/cha-que-chay.png',
            price: 70000,
            desc: '',
        },
        {
            id: 51,
            status: 1, 
            title: 'Nem chay',
            category: "Món chay",
            img: './assets/img/products/nem-chay.png',
            price: 160000,
            desc: 'Nem chay thơm ngon, thanh thuần bếp trưởng sử dụng rau củ bào tươi, đậu xanh, khoai môn, miến, mộc nhĩ và nấm hương, tất cả xào thơm cho lên vị, sau đó cuộn với bánh đa nem mỏng, chiên giòn vỏ, chấm mắm chua ngọt chay ăn kèm rau thơm rất hấp dẫn.',
        },
        {
            id: 52,
            status: 1, 
            title: 'Bánh tráng trộn',
            category: "Món ăn vặt",
            img: './assets/img/products/banh-trang-tron.jpg',
            price: 20000,
            desc: 'Bánh tráng trộn là món ăn ngon không chỉ nổi danh đất Sài Thành mà ngay khi xuất hiện tại Hà Nội, nó cũng đã trở thành món ăn “hot trend” rất được giới trẻ yêu thích. ',
        },
        {
            id: 53,
            status: 1, 
            title: 'Bánh tráng nướng',
            category: "Món ăn vặt",
            img: './assets/img/products/banh-trang-nuong.jpg',
            price: 10000,
            desc: 'Khác với món bánh tráng trộn, bánh tráng nướng được phết một lớp trứng chút lên bề mặt bánh tráng cùng thịt băm, mỡ hành, nướng đến khi có màu vàng ruộm. ',
        },
        {
            id: 54,
            status: 1, 
            title: 'Ốc thập cẩm (1 suất)',
            category: "Món ăn vặt",
            img: './assets/img/products/oc-thap-cam.jpg',
            price: 50000,
            desc: 'Được chế biến đủ các món ốc ngon khác nhau, như: ốc hấp, ốc luộc, ốc xào, ốc bỏ lò,.. với đủ các gia vị như tỏi, hành, ớt, tiêu, rau răm,…',
        },
        {
            id: 55,
            status: 1, 
            title: 'Cơm cháy chà bông',
            category: "Món ăn vặt",
            img: './assets/img/products/com-chay-cha-bong.jpg',
            price: 60000,
            desc: 'Cơm cháy chà bông có thể bảo quản cả tháng mà ăn vẫn ngon và đóng gói rất tiện.',
        },
        {
            id: 56,
            status: 1, 
            title: 'Phá lấu (1 suất)',
            category: "Món ăn vặt",
            img: './assets/img/products/pha-lau.jpg',
            price: 99000,
            desc: 'Cứ mỗi lần hỏi “Ăn gì ở Sài Gòn ngon, rẻ ?” là người ta nhớ ngay món phá lấu.',
        },
        {
            id: 57,
            status: 1, 
            title: 'Bột chiên (1 suất)',
            category: "Món ăn vặt",
            img: './assets/img/products/bot-chien.jpg',
            price: 49000,
            desc: 'Cùng với nước chấm đặc biệt, bột chiên để lại hương vị khó tả cho thực khách sau khi thưởng thức.',
        },
        {
            id: 58,
            status: 1, 
            title: 'Gỏi khô bò (1 suất)',
            category: "Món ăn vặt",
            img: './assets/img/products/goi-bo-kho.jpg',
            price: 60000,
            desc: 'Thơm ngon đến từng sợi bò.',
        },
        {
            id: 59,
            status: 1, 
            title: 'Hoành thánh tôm (10 viên)',
            img: './assets/img/products/hoanh_thanh.jpg',
            category: 'Món mặn',
            price: 130000,
            desc: 'Những miếng há cảo, sủi cảo, hoành thánh với phần nhân tôm, sò điệp, hải sản tươi ngon hay nhân thịt heo thơm ngậy chắc chắn sẽ khiến bất kỳ ai thưởng thức đều cảm thấy rất ngon miệng.'
        },
        {
            id: 60,
            status: 1, 
            title: 'Nước ép dâu tây',
            img: './assets/img/products/nuoc-ep-dau-tay.jpg',
            category: 'Nước uống',
            price: 100000,
            desc: 'Dâu tây ăn nguyên quả ngon ngọt, có cả quả dôn dốt chua, màu đỏ mọng trông cực yêu. Không chỉ ngon miệng mà đồ uống từ dâu tây còn có công dụng bảo vệ sức khỏe, sáng mắt, đẹp da, thon gọn vóc dáng. Làm giảm nguy cơ mắc bệnh về mỡ máu, chống viêm,…'
        },
        ]
        localStorage.setItem('products', JSON.stringify(products));
    }
}

// Create admin account 
function createAdminAccount() {
    let accounts = localStorage.getItem("accounts");
    if (!accounts) {
        accounts = [];
        accounts.push({
            fullname: "Hoàng Gia Bảo",
            phone: "hgbaodev",
            password: "123456",
            address: 'https://github.com/hgbaodev',
            email: 'musicanime2501@gmail.com',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        accounts.push({
            fullname: "Trần Nhật Sinh",
            phone: "0123456789",
            password: "123456",
            address: '',
            email: '',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        localStorage.setItem('accounts', JSON.stringify(accounts));
    }
}

window.onload = createProduct();
window.onload = createAdminAccount();
