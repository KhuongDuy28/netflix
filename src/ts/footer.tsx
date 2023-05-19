import '../css/footer.css'
import { FaGlobe } from 'react-icons/fa'


export function FooterNetflix() {
    return (
        <div className='footer-container'>
            <div className='footer-1'>
                <a><u>Bạn có câu hỏi? Liên hệ với chúng tôi.</u></a>
                <a><u>Câu hỏi thường gặp</u></a>
                <a><u>Trung tâm đa phương tiện</u></a>
                <a><u>Các cách xem</u></a>
                <a><u>Tùy chọn cookie</u></a>
                <a><u>Kiểm tra tốc độ</u></a>
                <select name="" id="" className='language-bottom'>
                    <option value=""> Việt Nam</option>
                    <option value="">English</option>
                </select>
                <p>Netflix Việt Nam</p>
                
            </div>
            <div className='footer-1'>
                <a><u>Trung tâm trợ giúp</u></a>
                <a><u>Quan hệ với nhà đầu tư</u></a>
                <a><u>Điều khoản sử dụng</u></a>
                <a><u>Thông tin doanh nghiệp</u></a>
                <a><u>Thông báo pháp lý</u></a>
            </div>
            <div className='footer-1'>
                <a><u>Tài khoản</u></a>
                <a><u>Việc làm</u></a>
                <a><u>Quyền riêng tư</u></a>
                <a><u>Liên hệ với chúng tôi</u></a>
                <a><u>Chỉ có trên Netflix</u></a>
            </div>
        </div>
    )
}