// Thực hiện tạo 1 sự kiện click cho nút tính tiền
// Truy cập và lấy dữ liệu của input soKM
// Truy cập và lấy dữ liệu của input thời gian chờ
// Truy cập và lấy dữ liệu của input của loại xe

document.querySelector(".contact100-form-btn").onclick = function () {
  let soKM = document.getElementById("txt-km").value * 1;
  let thoiGianCho = document.getElementById("txt-thoiGianCho").value * 1;
  // let loaiXe = document.querySelector('input[name="selector"]:checked').value;
  // let kiemTraNguoiDUng = document.getElementById("grabX").checked;
  // console.log(kiemTraNguoiDUng);
  let loaiXe = document.querySelector("input[type = 'radio']:checked").value;

  //Thực hiện từ loại xe ngươi dùng đi, lấy ra giá tiền 3 chặng xe và thời gian
  // chờ cho loại xe đó
  // Tách hàm cho 4 xử lý lấy 3 chặng xe và thời gian chờ

  // switch (loaiXe) {        Test
  //     case "grabCar":{
  //         tienKmDauTien = 8000;
  //         tienKmTu1Den19 = 7500;
  //         tienKmTu19TroLen = 7000;
  //         tienPhatChoLau = 2000;
  //         break;
  //     }
  //     case "grabSUV":{
  //         tienKmDauTien = 9000;
  //         tienKmTu1Den19 = 8500;
  //         tienKmTu19TroLen = 8000;
  //         tienPhatChoLau = 3000;
  //         break;
  //     }
  //     case "grabBlack":{
  //         tienKmDauTien = 10000;
  //         tienKmTu1Den19 = 9500;
  //         tienKmTu19TroLen = 9000;
  //         tienPhatChoLau = 3500;
  //         break;
  //     }
  // }
  console.log(soKM, thoiGianCho, loaiXe);
  let tongTienDiChuyen = 0;
  let tienKmDauTien = KiemTratienKmDauTien(loaiXe);
  let tienKmTu1Den19 = KiemTratienKmTu1Den19(loaiXe);
  let tienKmTu19TroLen = KiemTratienKmTu19TroLen(loaiXe);
  let tienPhatChoLau = KiemTratienPhatChoLau(loaiXe);
  console.log(tienKmDauTien, tienKmTu1Den19, tienKmTu19TroLen, tienPhatChoLau);

  if (soKM <= 1) {
    tongTienDiChuyen = tienKmDauTien;
  } else if (soKM > 1 && soKM <= 19) {
    tongTienDiChuyen = 1 * tienKmDauTien + (soKM - 1) * tienKmTu1Den19;
  } else if (soKM > 19) {
    tongTienDiChuyen =
      1 * tienKmDauTien + 18 * tienKmTu1Den19 + (soKM - 19) * tienKmTu19TroLen;
  }

  // Thời gian chờ
  let soLanPhat = Math.floor((thoiGianCho - 3) / 3); //1.423333
  tongTienDiChuyen += soLanPhat * tienPhatChoLau;
  console.log(tongTienDiChuyen);
  document.getElementById("divThanhTien").style.display = "block";
  document.getElementById("xuatTien").innerHTML =
    tongTienDiChuyen.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });
};
// Tạo biến grab
const GRAB_CAR = "grabCar";
const GRAB_SUV = "grabSUV";
const GRAB_BLACK = "grabBlack";

// Sử dụng function để tái sử dụng
function KiemTratienKmDauTien(loaiXe) {
  switch (loaiXe) {
    case GRAB_CAR: {
      return 8000;
    }
    case GRAB_SUV: {
      return 9000;
    }
    case GRAB_BLACK: {
      return 10000;
    }
  }
}
function KiemTratienKmTu1Den19(loaiXe) {
  switch (loaiXe) {
    case GRAB_CAR: {
      return 7500;
    }
    case GRAB_SUV: {
      return 8500;
    }
    case GRAB_BLACK: {
      return 9500;
    }
  }
}
function KiemTratienKmTu19TroLen(loaiXe) {
  switch (loaiXe) {
    case GRAB_CAR: {
      return 7000;
    }
    case GRAB_SUV: {
      return 8000;
    }
    case GRAB_BLACK: {
      return 9000;
    }
  }
}
function KiemTratienPhatChoLau(loaiXe) {
  switch (loaiXe) {
    case GRAB_CAR: {
      return 2000;
    }
    case GRAB_SUV: {
      return 3000;
    }
    case GRAB_BLACK: {
      return 3500;
    }
  }
}

document.getElementById("btnInHoaDon").onclick = function () {
  if (
    !document.querySelector("input[type='radio']:checked") ||
    document.getElementById("txt-km").value == ""
  ) {
    alert("Vui lòng điền đầy đủ thông tin !");
    return false;
  }
  $("#myModal").modal("show");

  let soKM = document.getElementById("txt-km").value * 1;
  let thoiGianCho = document.getElementById("txt-thoiGianCho").value * 1;
  let loaiXe = document.querySelector('input[name="selector"]:checked').value;
  let tongTienDiChuyen = 0;
  let tienKmDauTien = KiemTratienKmDauTien(loaiXe);
  let tienKmTu1Den19 = KiemTratienKmTu1Den19(loaiXe);
  let tienKmTu19TroLen = KiemTratienKmTu19TroLen(loaiXe);
  let tienPhatChoLau = KiemTratienPhatChoLau(loaiXe);
  let soKM2 = 0;

  if (soKM <= 1) {
    tongTienDiChuyen = tienKmDauTien;
  } else if (soKM > 1 && soKM <= 19) {
    soKM2 = soKM;
    tongTienDiChuyen = 1 * tienKmDauTien + (soKM - 1) * tienKmTu1Den19;
  } else if (soKM > 19) {
    tongTienDiChuyen =
      1 * tienKmDauTien + 18 * tienKmTu1Den19 + (soKM - 19) * tienKmTu19TroLen;
  }

  // Thời gian chờ
  let soLanPhat = Math.floor((thoiGianCho - 3) / 3); //1.423333 ceil lam tron len
  tongTienDiChuyen += soLanPhat * tienPhatChoLau;

  document.querySelector(".modal-body").innerHTML = ` 
    <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th colspan="2" scope="col">Loại Xe</th>
                  
                  <th scope="col">${loaiXe}</th>
                  <th scope="col">Số km: ${soKM}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CHI TIẾT</td>
                  <td>SỬ DỤNG</td>
                  <td>ĐƠN GIÁ (1000đ)</td>
                  <td>THÀNH TIỀN (1000đ)</td>
                </tr>
                <tr>
                <td>KM đầu tiên</td>
                <td>1Km</td>
                <td>${tienKmDauTien}</td>
                <td>${tienKmDauTien}</td>
                 </tr>
                ${
                  soKM > 1
                    ? ` <tr>
            <td>Từ 1km đến ${soKM < 19 ? soKM : "19"}km</td>
                <td>${soKM > 19 ? "18" : soKM - 1}km</td>
                <td>${tienKmTu1Den19}</td>
                <td>${tienKmTu1Den19 * (soKM > 19 ? 18 : soKM - 1)}</td>
            </tr> `
                    : ""
                }
                 ${
                   soKM > 19
                     ? ` <tr>
                <td>Từ 19km trở lên</td>
                <td>${soKM - 19}km</td>
                <td>${tienKmTu19TroLen}</td>
                <td>${tienKmTu19TroLen}</td>
            </tr> `
                     : ""
                 }
                <tr>
                  <td>Thời gian chờ
                    3 phút đầu free</td>
                  <td>${
                    thoiGianCho > 3
                      ? `Chờ ${thoiGianCho} phút, tính tiền ${
                          thoiGianCho - 3
                        } phút`
                      : "0"
                  }</td>
                  <td>${tienPhatChoLau}</td>
                  <td>${soLanPhat * tienPhatChoLau}</td>
                </tr>
                <tr>
                  <td colspan="4 " class="text-right">Tổng tiền:
                    <span class="text-danger">${tongTienDiChuyen.toLocaleString(
                      "it-IT",
                      {
                        style: "currency",
                        currency: "VND",
                      }
                    )}
             </span>
                  </td>
                  
                </tr>
              </tbody>
            </table>
                 </div> 
      
    
    `;
};
