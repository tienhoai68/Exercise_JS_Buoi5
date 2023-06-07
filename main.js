/** quản lí tuyển sinh
 * Mô hình 3 khối
 * + input 
 * - lấy giá từ người dùng: điểm chuẩn, khu vực, đối tượng, điểm thứ nhất, điểm thứ hai, điểm thứ ba;
 * + progress:
 * - tạo hàm tính tổng điểm = diem1 + diem2 + diem3 + diemkhu + diemdoituong; và trả về giá trị
 * - tạo hàm chứa các điều kiện để so sánh và thông báo kết quả:
 * - điều kiện  diemThuNhat == 0 || diemThuHai == 0 || diemThuBa == 0 => rớt do có điểm bằng 0;
 * - điều kiện tổng điểm > điểm chuẩn => đậu
 * - điều kiện tổng điểm < điểm chuẩn => rớt
 * - tạo hàm function chứa biến tính tổng điểm =  diemThuNhat + diemThuHai + diemThuBa + khuVuc + doiTuong;
 * + output:
 * - in ra kết quả thông báo
 */
// hàm DOM
function getEle(id) {
    return document.getElementById(id);
}
// hàm tính tổng điểm
function tongDiem(diem1, diem2, diem3, diemkhu, diemdoituong) {
    var diemBaMon = 0;
    diemBaMon = (diem1 + diem2 + diem3 + diemkhu + diemdoituong);
    return diemBaMon;
}
// hàm báo đậu rớt
function dauRot(diemThuNhat, diemThuHai, diemThuBa, diemChuanDauVao, result) {
    if (diemThuNhat == 0 || diemThuHai == 0 || diemThuBa == 0) {
       return getEle('ketQuaDauRot').innerHTML = 'Bạn đã rớt do có điểm bằng 0';
    }
    else if (result >= diemChuanDauVao) {
       return getEle('ketQuaDauRot').innerHTML = 'Bạn trúng tuyển. ' + 'tổng điểm của bạn là: ' + result;
    }
    else if (result < diemChuanDauVao) {
        return getEle('ketQuaDauRot').innerHTML = 'Bạn đã trượt. ' + 'tổng điểm của bạn là: ' + result;
    }
}
// hàm kết quả
getEle('ketQua').onclick = function () {
    // debugger   
    var diemChuanDauVao = getEle('diemChuan').value * 1;
    var khuVuc = getEle('khuVuc').value * 1;
    var doiTuong = getEle('diemDoiTuong').value * 1;
    var diemThuNhat = getEle('diemThuNhat').value * 1;
    var diemThuHai = getEle('diemThuHai').value * 1;
    var diemThuBa = getEle('diemThuBa').value * 1;
    var result = tongDiem(diemThuNhat, diemThuHai, diemThuBa, khuVuc, doiTuong);
    dauRot(diemThuNhat, diemThuHai, diemThuBa, diemChuanDauVao, result);
}
/** 
 * mô hình 3 khối 
 * + input : lấy giá trị (value) họ tên và số kwDien mà người dùng nhập vào.
 * + progress: 
 * - tạo hàm tính 50 KwDien đầu = sotien * Kwdien;
 * - tạo hàm tính 50 Kwdien kế = (500 * 50) + ((kwDien - 50) * sotien),
 * - tạo hàm tính 100kw kế = (500 * 50) + ((100 - 50) * 650) + ((kwDien - 100) * sotien);
 * - tạo hàm tính 150kw kế = (500 * 50) + ((100 - 50) * 650) + ((200 - 100) * 850) + ((kwDien - 200) * sotien);
 * - tạo hàm tính 350kw trở lên = (500 * 50) + ((100 - 50) * 650) + ((200 - 100) * 850) + ((350 - 200) * 1100) + ((kwDien - 350) * sotien);
 * - tạo hàm chứa các điều kiện tính giá tiền phù hợp theo mức kw
 * + output: 
 * - tạo hàm onclick để nhấn nút xuất kết quả ra mà hình
 * 
*/
// hàm 50kw đầu
function kwDau(sotien, kwDien) {
    return sotien * kwDien;
}
// hàm 50Kw - 100Kw
function kwMoc_2(sotien, kwDien) {
    return (500 * 50) + ((kwDien - 50) * sotien);
}
// hàm 100Kw - 200Kw  
function kwMoc_3(sotien, kwDien) {
    return (500 * 50) + ((100 - 50) * 650) + ((kwDien - 100) * sotien);
}
// hàm 200kw - 350Kw 
function kwMoc_4(sotien, kwDien) {
    return (500 * 50) + ((100 - 50) * 650) + ((200 - 100) * 850) + ((kwDien - 200) * sotien);
}

// hàm 350kw trở lên
function kwMoc_5(sotien, kwDien) {
    return (500 * 50) + ((100 - 50) * 650) + ((200 - 100) * 850) + ((350 - 200) * 1100) + ((kwDien - 350) * sotien);
}
// hàm tính tiền điện
function soKwDien(kwDien) {
    var tienDien = 0;
    if (kwDien > 0 && kwDien <= 50) {
        tienDien = kwDau(500, kwDien);
    } else if (kwDien > 50 && kwDien <= 100) {
        tienDien = kwMoc_2(650, kwDien);
    } else if (kwDien > 100 && kwDien <= 200) {
        tienDien = kwMoc_3(850, kwDien);
    } else if (kwDien > 200 && kwDien <= 350) {
        tienDien = kwMoc_4(1100, kwDien);
    } else if (kwDien > 350) {
        tienDien = kwMoc_5(1300, kwDien);
    } else {
        tienDien = alert(' Sai cú pháp vui lòng nhập lại ');
    }
    return tienDien;
}
/**
 *  hàm kết quả tính tiền điện
 */
getEle('tinhTienDien').onclick = function () {
    debugger
    var hoTen = getEle('hoTen').value;
    var soKw = getEle('soKw').value * 1;
    var thanhTien = soKwDien(soKw);
    var formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    })
    getEle('ketQuaTienDien').innerHTML = 'Họ Tên: ' + hoTen + ', Số tiền điện là: ' + formatter.format(thanhTien);

}

/**
 * tính thuế thu nhập cá nhân
 * mô hình 3 khối:
 * + input : 
 * - lấy giá trị từ người dùng hoVaTen, tongThuNhap, nguoiPhuThuoc;
 * + progress: 
 * - tạo hàm tính thuế: 
 * - thuNhapChiuThue = tongThuNhap - 4000000 - nguoiPhuThuoc * 1600000;
 * - dùng if để đưa điều kiện theo từng khoảng tính thuế : 
 * - áp dụng công thức : thuNhapChiuThue * phần trăm chịu thuế trong khoảng điều kiện tương ứng
 * + output: 
 * - tạo hàm in ra kết quả 
 */

// hàm tính tiền nộp thuế theo mức lương
function nopThue (thuNhapChiuThue) {
    var nopThue = 0;
    if (thuNhapChiuThue > 0 && thuNhapChiuThue <= 60000000) {
        nopThue = thuNhapChiuThue * 0.05;
    } else if (thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000) {
        nopThue = thuNhapChiuThue * 0.1;
    } else if (thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000) {
        nopThue = thuNhapChiuThue * 0.15;
    } else if (thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000) {
        nopThue = thuNhapChiuThue * 0.2;
    } else if (thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000) {
        nopThue = thuNhapChiuThue * 0.25;
    } else if (thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000) {
        nopThue = thuNhapChiuThue * 0.3;
    } else if (thuNhapChiuThue > 960000000) {
        nopThue = thuNhapChiuThue * 0.35;
    } else {
        nopThue = alert(' Vui lòng nhập giá trị phù hợp ')
    }
    return nopThue;
}
// hàm tính tiền thuế
function tinhThue(tongThuNhap, nguoiPhuThuoc) {
    var thuNhapChiuThue = tongThuNhap - 4000000 - nguoiPhuThuoc * 1600000;
    return tienNopThue = nopThue(thuNhapChiuThue);
}
// hàm click show kết quả
getEle('tinhTienThue').onclick = function () {
    // debugger
    var hoVaTen = getEle('hoVaTen').value;
    var tongThuNhap = getEle('tongThuNhap').value * 1;
    var nguoiPhuThuoc = getEle('nguoiPhuThuoc').value * 1;
    var formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    })
    var result = tinhThue(tongThuNhap, nguoiPhuThuoc);
    var resultFormat = 'Họ tên ' + hoVaTen + ' Tiền thuế thu nhập cá nhân: ' + formatter.format(result);
    getEle('ketQuaThue').innerHTML = resultFormat;

}


/**
 * Tính tiền cáp
 * mô hình 3 khối:
 * + input:
 * - khách hàng cá nhân lấy giá trị đầu vào : loại khách hàng, mã khách và số kênh cao áp;
 * - khách hàng là doanh nghiệp : loại khách hàng, mã khách và số kênh cao áp, số kết nối
 * + progress:
 * - tạo hàm tienCapCN => tienCap = hoaDonCN + phiDichVuCN + (thueKenhCN * kenhCaoCap);
 * - tạo hàm tính tiền cáp doanh nghiệp : 
 * - số kết nối từ 1 - 10 thì CapDN_Moc1 => tienCap = (hoaDonDN + phiDichVuDN) + (thueKenhDN * kenhCaoCap);
 * - số kết nối từ 10 trở lên thì mổi kết nối 5$ CapDN_Moc2 => tienCap = (hoaDonDN + phiDichVuDN) + (thueKenhDN * kenhCaoCap) + ((soKetNoi - 10) * 5);
 * - tạo hàm chứa các phí đầu vào được cho sẵng và chứa các điều kiện:
 * - cá nhân => thì dùng hàm tienCapCN( truyền vào thông số tương ứng)
 * - doanh nghiệp có số kết nối <=10 thì dùng hàm CapDN_Moc1( truyền thông số tương ứng)
 * - doanh nghiệp có số kết nối >10 thì dùng hàm CapDN_Moc2( truyền thông số tương ứng)
 * + output:
 * - tạo hàm in ra kết quả
 */


// hiện số kết nối
function hienSoKetNoi() {
    var loaiKhachHang = getEle('loaiKhachHang').value;
    var soKetNoi = getEle('soKetNoi');

    if (loaiKhachHang === 'business') {
        soKetNoi.style.display = 'block';
    } else {
        soKetNoi.style.display = 'none';
    }

}

// hàm tính tiền cáp cho cá nhân
function tienCapCN(hoaDonCN, phiDichVuCN, thueKenhCN, kenhCaoCap) {
    return hoaDonCN + phiDichVuCN + (thueKenhCN * kenhCaoCap);
}
// hàm tính tiền cáp cho doanh nghiệp với số kết nối <=10
function CapDN_Moc1(hoaDonDN, phiDichVuDN, thueKenhDN, kenhCaoCap) {
    return (hoaDonDN + phiDichVuDN) + (thueKenhDN * kenhCaoCap);
}
// hàm tính tiền cáp cho doanh nghiệp với số kết nối > 10

function CapDN_Moc2(hoaDonDN, phiDichVuDN, thueKenhDN, kenhCaoCap, soKetNoi) {
    return (hoaDonDN + phiDichVuDN) + (thueKenhDN * kenhCaoCap) + ((soKetNoi - 10) * 5);
}
function tinhTienCap(loaiKhachHang, kenhCaoCap, soKetNoi) {
    var soTien = 0;
    var hoaDonCN = 4.5;
    var phiDichVuCN = 20.5;
    var thueKenhCN = 7.5;
    var hoaDonDN = 15;
    var phiDichVuDN = 75;
    var thueKenhDN = 50;
    if (loaiKhachHang === 'personal') {
        soTien = tienCapCN(hoaDonCN, phiDichVuCN, thueKenhCN, kenhCaoCap);
    } else if (loaiKhachHang === 'business') {
        if (soKetNoi > 0 && soKetNoi <= 10) {
            soTien = CapDN_Moc1(hoaDonDN, phiDichVuDN, thueKenhDN, kenhCaoCap);
        } else if (soKetNoi > 10) {
            soTien = CapDN_Moc2(hoaDonDN, phiDichVuDN, thueKenhDN, kenhCaoCap, soKetNoi);
        }
    }else {
        soTien = alert('Hãy chọn loại khách hàng')
    }
    return soTien;
}
// tính tiền cáp
getEle('tinhTienCap').onclick = function () {
    var maKhachHang = getEle('maKhachHang').value;
    var loaiKhachHang = getEle('loaiKhachHang').value;
    var kenhCaoCap = getEle('kenhCaoCap').value * 1;
    var soKetNoi = getEle('soKetNoi').value * 1;
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })
    var result = tinhTienCap(loaiKhachHang, kenhCaoCap, soKetNoi);
    getEle('ketQuaTienCap').innerHTML = 'Mã khách hàng: ' + maKhachHang + '; Tiền cáp: ' + formatter.format(result);

}
