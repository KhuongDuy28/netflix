import '../css/header.css'
import { FaChevronRight } from 'react-icons/fa'


export function Hnetflix() {

    return (
        <div className='container'>

                        <div className='header-contain'>
                            <div className='header-logo'>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png" alt="" />
                            </div>
                            <div className='header-select-btn'>
                                <select className='language'>
                                    <option value="vn">Việt Nam</option>
                                    <option value="en">English</option>
                                </select>
                                <button className='btn-login'>Đăng Nhập</button>
                            </div>
                        </div>
                        

                        <div className='content-text'>
                            <h1>Chương trình truyền hình, phim không giới hạn và nhiều nội dung khác.</h1>
                            <h2>Xem ở mọi nơi. Hủy bất kỳ lúc nào.</h2>
                            <h2>Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách thành viên của bạn.</h2>
                            <div className='email-start'>
                                <div className='input-group'>
                                    <input type="text" />
                                    <label htmlFor="" >Địa chỉ email</label>
                                </div>
                                <button className='btn-start'>Bắt đầu <FaChevronRight id='icon-next'/></button>
                            </div>
                        </div>

        </div>
    )
     
}

