/** Bài tập 1
 * - Input: nhập số ngày làm
 * - Process: 
 *  + Khai báo biến số ngày làm , biến lương trên ngày 
 *  + Tính lương = lương trên ngày * số ngày làm
 * - Ouput: xuất lương 
 */

document.getElementById('tinhLuong').onclick = function () {
    var soNgayLam = document.getElementById('txtSoNgay').value*1;
    const luong1Ngay = 100000;
    var luong = luong1Ngay * soNgayLam ;
    document.getElementById('showKetQua').innerHTML = 'Lương của bạn là : ' + luong;
}

/** Bài tập 2
 * - Input : 5 số thực
 * - Process :
 *  + Khai báo biến số thực
 *  + trung bình = tổng 5 số / 5
 * - Output: giá trị trung bình
 */

document.getElementById('tinhTrungBinh').onclick = function () {
    var soThuc1 = document.getElementById('txtSo1').value*1;
    var soThuc2 = document.getElementById('txtSo2').value*1;
    var soThuc3 = document.getElementById('txtSo3').value*1;
    var soThuc4 = document.getElementById('txtSo4').value*1;
    var soThuc5 = document.getElementById('txtSo5').value*1;
    var trungBinh = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5) / 5;
    document.getElementById('showGiaTri').innerHTML = 'Trung bình là : ' + trungBinh;
}

/** Bài tập 3
 * - Input : số tiền USD , const = 23.500 VND
 * - Process :
 *  + Khai báo biến số tiền
 *  + Quy đổi = số tiền * const
 * - Output: giá trị tienVND
 */

document.getElementById('tinhQuyDoiTien').onclick = function () {
    var soTienUSD = document.getElementById('txtSoTienUSD').value*1;
    const giaUSD = 23500 ;
    var soTienVND = soTienUSD * giaUSD ;
    document.getElementById('showTienVND').innerHTML = 'Số tiền VND là : ' + soTienVND + ' VND';
}

/** Bài tập 4
 * - Input : chiều dài và chiều rộng
 * - Process :
 *  + Khai báo biến chiều dài và chiều rộng
 *  + Chuvi = (dài + rộng)*2
 *  + Diện tích = dài * rộng
 * - Output: Chu vi và Diện tích
 */

document.getElementById('tinhToan').onclick = function () {
    var chieuDai = document.getElementById('txtChieuDai').value*1;
    var chieuRong = document.getElementById('txtChieuRong').value*1;
    var chuVi = (chieuDai + chieuRong) * 2;
    var dienTich = chieuDai * chieuRong ;
    document.getElementById('chuVi').innerHTML = 'Chu vi là : ' + chuVi ;
    document.getElementById('dienTich').innerHTML = 'Diện tích là : ' + dienTich ;
}

/** Bài tập 5
 * - Input : số có 2 chữ số
 * - Process :
 *  + Khai báo biến số đơn vị và số hàng chục
 *  + Tổng 2 ký số= số đvi + số hàng chục
 * - Output: tổng 2 ký số
 */

document.getElementById('tinhTongKiSo').onclick = function () {
    var soDonVi = document.getElementById('txtSo2ChuSo').value*1 % 10;
    var soHangChuc = Math.floor(document.getElementById('txtSo2ChuSo').value*1 / 10);
    var tong2KySo = soDonVi + soHangChuc ;
    document.getElementById('showTong').innerHTML = 'Tổng 2 ký số : ' + tong2KySo;

}
