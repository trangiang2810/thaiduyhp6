document.addEventListener("DOMContentLoaded", function () {
  var product_list = [
    {
      img: "https://bizweb.dktcdn.net/thumb/large/100/355/156/products/dungbaogiodianmotminhtaiban1.jpg?v=1558509664663",
      name: "Đừng bao giờ đi ăn một mình",
      price: "95.000₫",
      saled_price: "71.000₫",
      num_price: 71000,
      author: "Keith Ferrazzi",
      description:
        "“Đừng bao giờ đi ăn một mình” thay đổi cách nhìn của bạn về cuộc sống giao tiếp xung quanh. Có nhiều người đã và đang rất thích sự cô đơn, bởi vì cảm thấy sự xuất hiện của người khác khiến cuộc sống của họ rắc rối. Họ sẽ không mấy vui vẻ khi có người khác xuất hiện và chen vào cuộc sống của mình. Nhưng sau khi đọc xong cuốn sách, bạn sẽ thấy rằng, con người sống trong xã hội nếu cứ mãi đi một mình thì sẽ bị bỏ lại phía sau, nếu bạn cứ mãi ở trong vỏ bọc của chính mình thì chuyện vấp ngã chỉ là sớm muộn.",
    },
    {
      img: "https://bizweb.dktcdn.net/thumb/large/100/355/156/products/13nguyentacnghigiaulamgiauthin.jpg?v=1558497091647",
      name: "13 nguyên tắc nghĩ giàu làm giàu",
      price: "115.000₫",
      saled_price: "86.000₫",
      num_price: 86000,
      author: "Napoleon Hill",
      description:
        "“Nghĩ giàu và Làm Giàu” là một cuốn sách kinh điển về làm giàu, làm người của Napoleon Hill nổi tiếng toàn thế giới với 60 triệu bản được bán suốt 70 năm qua. Cuốn sách là tinh hoa được tác giả Napoleon Hill dành toàn bộ thời gian và công sức suốt gần 30 năm để phỏng vấn hơn 500 người nổi tiếng và thành công nhất trong nhiều lĩnh vực, cùng hàng ngàn doanh nhân khác, có giá trị vĩnh hằng theo thời gian về tính đúng đắn! Tất cả những bí mật làm giàu được Napoleon Hill chuyển tải thông qua 13 nguyên tắc quan trọng được ông đúc kết xuyên suốt gần 30 năm. 13 nguyên tắc này như một kim chỉ nam để mở toang cánh cửa giúp chúng ta đạt được những mục tiêu lớn lao của cuộc đời mình.",
    },
    {
      img: "https://bizweb.dktcdn.net/thumb/large/100/355/156/products/anvochochaytaiban1.jpg?v=1558497090640",
      name: "Ăn vóc học hay",
      price: "45.000₫",
      saled_price: "34.000₫",
      num_price: 34000,
      author: "Đỗ Hồng Ngọc",
      description:
        "“Đây là những chuyện đời thường, hằng ngày chúng ta vẫn gặp, chuyện cái ăn, cái mặc, nếp nghĩ, nếp làm… Nhưng nó lại là cái cớ để chúng ta có dịp trò chuyện thân tình với nhau hôm nay, giữa một người đi trước và một người đi sau – giữa hai thế hệ – cách nhau có khi hơn nửa thế kỷ nhưng vẫn còn rất nhiều điều gần gũi nhau. Cho nên khi viết cho em, khi nói với em, cũng chính là cơ hội để tôi nhìn lại tôi.” - Bác sĩ Đỗ Hồng Ngọc",
    },
    {
      img: "https://bizweb.dktcdn.net/thumb/large/100/355/156/products/tugiandudenbinhankemcd1.jpg?v=1558497088283",
      name: "Từ giận dữ đến bình an",
      price: "62.000₫",
      saled_price: "47.000₫",
      num_price: 47000,
      author: "Mike George",
      description:
        "Từ Giận Dữ Đến Bình An của tác giả Mike George. Cuốn sách được viết trên quan niệm về tâm linh như là một lời giải đáp của ý thức và vô thức để hiểu nguyên nhân và con đường giải thoát khỏi sự tức giận, hướng chúng ta đến với cuộc sống bình an và vị tha.",
    },
    {
      img: "https://bizweb.dktcdn.net/thumb/large/100/355/156/products/thauhieunguoimuagiaimatangtruo.jpg?v=1558499249693",
      name: "Thấu hiểu người mua",
      price: "129.000₫",
      saled_price: "97.000₫",
      num_price: 97000,
      author: "Siemon Scamell-Katz",
      description:
        'Thấu hiểu người mua, giải mã tăng trưởng (tựa gốc: "The Art of Shopping" là tựa sách kinh điển tổng hợp hơn 20 năm nghiên cứu về hành vi người mua (shopper behaviour) trên toàn thế giới của tập đoàn TNS Worldwide, tập đoàn nghiên cứu thị trường lớn nhất thế giới. Bằng cách ứng dụng các công nghệ tiên tiến (fMRI, VR, eye-tracking, quay phim) - lần đầu tiên, những hành vi “làm mà không nói” hay “làm mà không nghĩ” của người mua được ghi nhận đầy đủ, qua đó tạo nên một bức chân dung đầy đủ nhất - điều ao ước lớn nhất của bất kỳ marketer nào.',
    },
    {
      img: "https://bizweb.dktcdn.net/thumb/large/100/355/156/products/camnangkinhdoanhquanlysuthaydo.jpg?v=1558497093103",
      name: "Quản lý sự thay đổi",
      price: "56.000₫",
      saled_price: "42.000₫",
      num_price: 42000,
      author: "Harvard",
      description:
        "Bộ sách nổi tiếng Cẩm nang kinh doanh Harvard - Harvard Business Essentials được xuất bản theo hợp đồng chuyển giao bản quyền giữa trường Đại học Kinh Doanh Harvard và First News - Trí Việt, Việt Nam. Đây là bộ sách đúc kết những giải pháp kinh doanh hiệu quả và thực tiễn nhất cùng những kinh nghiệm quý báu, thiết thực cập nhật về mọi mặt trong quản lý, kinh doanbh của trường đại học danh tiếng nhất thế giới về bề dày trên 370 năm thành lập.",
    },
    {
      img: "https://bizweb.dktcdn.net/thumb/large/100/355/156/products/conduongchuyenhoa1.jpg?v=1558497089257",
      name: "Con đường chuyển hóa",
      price: "69.000₫",
      saled_price: "48.000₫ ",
      num_price: 48000,
      author: "Thích Nhất Hạnh",
      description:
        "Sách Con Đường Chuyển Hóa của thiền sư Thích Nhất Hạnh là những hướng dẫn cụ thể để chúng ta tiếp xúc được suối nguồn thiền tập của đạo Bụt. Hơn thế nữa, tác giả còn hiến tặng những phương pháp thực hành thực tế giúp hành giả trải nghiệm được nếp sống tỉnh thức trong đời sống hàng ngày.",
    },
    {
      img: "https://bizweb.dktcdn.net/thumb/large/100/355/156/products/chuyenbaycuocdoi1.jpg?v=1558497087170",
      name: "Chuyến bay cuộc đời",
      price: "37.000₫",
      saled_price: "26.000₫",
      num_price: 26000,
      author: "Brian Tracy",
      description:
        "Với cuốn sách Chuyến Bay Cuộc Đời – Bí Quyết Thực Sự Để Thành Công, bạn sẽ được trải qua 12 bước bao gồm: chọn mục tiêu, lựa chọn phương án thực hiện, lê kế hoạch, chuẩn bị lộ trình, dốc toàn lực để cất cánh, lên kế hoạch ứng phó sự cố, liên tục điều chỉnh kế hoạch, thúc đẩy quá trình học hỏi và tiến bộ, kích hoạt tiềm năng trí tuệ, tránh đường tắt và các ảo tưởng khác, làm chủ nỗi sợ hãi, kiên định để thành công. 12 bước tạo nên một chuyến bay hoàn hảo giúp bạn hướng tới một cuộc sống hạnh phúc hơn, khỏe mạnh hơn và giàu có hơn bất kỳ thời gian nào trước đây.",
    },
    {
      img: "https://salt.tikicdn.com/cache/w1200/media/catalog/product/s/u/suc_manh-cau-thoi-quen_2.jpg",
      name: "Sức mạnh của thói quen",
      price: "130.000₫",
      saled_price: "97.000₫",
      num_price: 97000,
      author: "Charles Duhigg",
      description:
        "Về cơ bản, người lớn và trẻ em không khác nhau là mấy. Bởi hầu hết những hành động hàng ngày của chúng ta đều là sản phẩm của thói quen vô thức. Thế nhưng không phải cá nhân, tổ chức nào cũng có được thành công. Đó là vì mỗi người có những thói quen riêng. Vậy thói quen nào mới giúp bạn thành công? Trong cuốn sách “Sức mạnh của thói quen”, Charles Duhigg sẽ giải đáp thắc mắc ấy.",
    },
    {
      img: "https://lamgiau247.com/wp-content/uploads/2014/09/878b2a3490c3ca09f0deee7de643a706.jpg",
      name: "Tư duy tích cực",
      price: "105.000₫",
      saled_price: "79.000₫",
      num_price: 79000,
      author: "Norman Vincent Peale",
      description:
        'Rồi bạn sẽ thất bại. Đó chính là quy luật của cuộc sống. Bạn sẽ ăn vạ, khóc lóc chờ một vị anh hùng xuất hiện để cứu rỗi đời mình? Bạn sẽ nấp vào một góc chờ sóng gió qua đi một cách hèn nhát? Hay bạn sẽ đứng lên bằng chính đôi chân, chính sức lực, và chính sự tích cực của mình? Chắc bạn đang tự nhủ "Tôi chả có gì ngoài sự tiêu cực cả." Đừng lo! Tôi đây sẽ tiếp thêm năng lượng tích cực cho cuộc sống của bạn. Hãy đọc quyển sách này.',
    },
    {
      img: "https://tiemsach.org/wp-content/uploads/2023/07/Ebook-Dac-nhan-tam.jpg",
      name: "Đắc nhân tâm",
      price: "85.000₫",
      saled_price: "65.000₫",
      num_price: 65000,
      author: "Dale Carnegie",
      description:
        "Đắc nhân tâm của Dale Carnegie là quyển sách của mọi thời đại và một hiện tượng đáng kinh ngạc trong ngành xuất bản Hoa Kỳ. Trong suốt nhiều thập kỷ tiếp theo và cho đến tận bây giờ, tác phẩm này vẫn chiếm vị trí số một trong danh mục sách bán chạy nhất và trở thành một sự kiện có một không hai trong lịch sử ngành xuất bản thế giới và được đánh giá là một quyển sách có tầm ảnh hưởng nhất mọi thời đại.",
    },
    {
      img: "https://cdn0.fahasa.com/media/catalog/product/n/h/nhen_anansi_va_chiec_tui_thong_thai_1_2018_11_03_11_16_36.JPG",
      name: "Nhện Anansi",
      price: "25.000₫",
      saled_price: "22.000₫",
      num_price: 22000,
      author: "Neil Gaiman",
      description:
        "Một cuốn sách kể về các thần thoại Anansi, đầy sự huyền bí và bất ngờ.",
    },
    {
      img: "https://toplist.vn/images/800px/nha-gia-kim-paulo-coelho-4777.jpg",
      name: "Nhà giả kim",
      price: "95.000₫",
      saled_price: "72.000₫",
      num_price: 72000,
      author: "Paulo Coelho",
      description:
        "Tiểu thuyết Nhà giả kim của Paulo Coelho như một câu chuyện cổ tích giản dị, nhân ái, giàu chất thơ, thấm đẫm những minh triết huyền bí của phương Đông. Trong lần xuất bản đầu tiên tại Brazil vào năm 1988, sách chỉ bán được 900 bản. Nhưng, với số phận đặc biệt của cuốn sách dành cho toàn nhân loại, vượt ra ngoài biên giới quốc gia, Nhà giả kim đã làm rung động hàng triệu tâm hồn, trở thành một trong những cuốn sách bán chạy nhất mọi thời đại, và có thể làm thay đổi cuộc đời người đọc.",
    },
    {
      img: "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/khi_hoi_tho_hoa_thinh_khong_tai_ban_2020/2021_06_22_18_40_48_1-390x510.png",
      name: "Khi hơi thở hóa thinh không",
      price: "160.000₫",
      saled_price: "120.000₫",
      num_price: 120000,
      author: "Paul Kalanithi",
      description:
        "Khi hơi thở hóa thinh không là tự truyện của một bác sĩ bị mắc bệnh ung thư phổi. Trong cuốn sách này, tác giả đã chia sẻ những trải nghiệm từ khi mới bắt đầu học ngành y, tiếp xúc với bệnh nhân cho tới khi phát hiện ra mình bị ung thư và phải điều trị lâu dài.",
    },
  ];

  function themsp() {
    alert("Thêm sản phẩm thành công!");
  }
  var product = document.getElementById("product");
  var filters = document.querySelectorAll("input[type=checkbox]");
  product_list.map((a) => {
    var display = `<div class="card col-3" style=" border: none">
        <img
          src="${a.img}"
          class="card-img-top sanpham"
          alt="..."
        />
        <div
        
          style="margin: 0"
          class="card-body d-flex flex-column align-items-center"
        >
          <p class="card-text" style='font-size:15px'>${a.name}</p>
          <div class="d-flex justify-content-center align-items-center gap-3">
            <p style="color: #f97319; font-size:16px">${a.saled_price}</p>
            <p class="" style="text-decoration: line-through; font-size: 12px; #7b8395">
              ${a.price}
            </p>
          </div>
          <button style="border:none; border-radius:10px; background-color: #ffbe00;" class="xemthem py-2 px-4" >
      Thêm
    </button>
        </div>
      </div>`;
    product.innerHTML += display;
  });

  function filterProducts() {
    let selectedAuthors = [];
    let selectedPrices = [];

    filters.forEach((filter) => {
      if (filter.checked) {
        if (filter.id.includes("Giá")) {
          selectedPrices.push(filter.id);
        } 
        else {
          selectedAuthors.push(filter.id);
        }
      }
    });

    let filteredProducts = product_list.filter((product) => {
      let authorMatch =
        selectedAuthors.length === 0 ||
        selectedAuthors.includes(product.author);
      let priceMatch =
        selectedPrices.length === 0 ||
        selectedPrices.some((priceRange) => {
          let price = product.num_price;
          if (priceRange === "Giá dưới 50.000đ") return price < 50000;
          if (priceRange === "50.000đ - 70.000đ")
            return price >= 50000 && price <= 70000;
          if (priceRange === "Giá 70.000đ - 100.000đ")
            return price >= 70000 && price <= 100000;
          if (priceRange === "Giá trên 100.000đ") return price > 100000;
          return false;
        });

      return authorMatch && priceMatch;
    });

    displayProducts(filteredProducts);
  }
  var tang = document.getElementById("tangdan");
  var giam = document.getElementById("giamdan");

  function displayProducts(products) {
    product.innerHTML = "";
    if (products.length === 0) {
      product.innerHTML = "<p>Không có sản phẩm nào phù hợp.</p>";
      return;
    }
    products.forEach((a) => {
      var display = `<div class="card col-3" style="border: none">
            <img src="${a.img}" class="card-img-top sanpham" alt="..."/>
            <div style="margin: 0" class="card-body d-flex flex-column align-items-center">
                <p class="card-text" style="font-size:15px">${a.name}</p>
                <div class="d-flex justify-content-center align-items-center gap-3">
                    <p style="color: #f97319; font-size:16px">${a.saled_price}</p>
                    <p class="" style="text-decoration: line-through; font-size: 12px; color: #7b8395">${a.price}</p>
                </div>
                <button style="border:none; border-radius:10px; background-color: #ffbe00;" class="xemthem py-2 px-4" >
      Thêm
    </button>
            </div>
        </div>`;
      product.innerHTML += display;
    });
    var buttons = document.querySelectorAll(".xemthem");
    buttons.forEach((button) => {
      button.addEventListener("click", themsp);
    });
  }

  displayProducts(product_list);
  filters.forEach((filter) =>
    filter.addEventListener("change", filterProducts)
  );

  tang.addEventListener("click", () => {
    product_list.sort(
      (a, b) =>
        parseFloat(a.saled_price.replace("₫", "").replace(".", "").trim()) -
        parseFloat(b.saled_price.replace("₫", "").replace(".", "").trim())
    );
    displayProducts(product_list);
  });
  giam.addEventListener("click", () => {
    product_list.sort(
      (a, b) =>
        parseFloat(b.saled_price.replace("₫", "").replace(".", "").trim()) -
        parseFloat(a.saled_price.replace("₫", "").replace(".", "").trim())
    );
    displayProducts(product_list);
  });
});
