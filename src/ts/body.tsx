import '../css/body.css'
import { FaChevronRight, FaPlus, FaDownload } from 'react-icons/fa'

import { TfiDownload } from 'react-icons/tfi'


export function NetflixBody1() {
    return (
        <div className='body-container'>
            <div className='body-1'>
                <div className='text-body-1'>
                    <h1>Thưởng thức trên TV của bạn.</h1>
                    <p>Xem trên TV thông minh, Playstation, Xbox, Chromecast, Apple TV, đầu phát Blu-ray và nhiều thiết bị khác.</p>
                </div>
                <div className='img-body-1'>
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
                </div>
            </div>
            
        </div>
    )
}

export function NetflixBody2() {
    return (
        <div className='body-container'>
            <div className='body-2'>              
                <div className='img-body-2'>
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
                        <div className='download'>
                            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" />
                            <div className='text-download'>
                                <h3>Cậu bé mất tích</h3>
                                <p>Đang tải xuống...</p>
                            </div>
                            <div className='ic-down'>
                                < TfiDownload id='icon-download'/>
                            </div>
                        </div>
                </div>
                <div className='text-body-2'>
                    <h1>Tải xuống nội dung để xem ngoại tuyến.</h1>
                    <p>Lưu lại những nội dung yêu thích một cách dễ dàng và luôn có thứ để xem.</p>
                </div>
                
            </div>
        </div>
    )
}

export function NetflixBody3() {
    return (
        <div className='body-container'>
            <div className='body-3'>
                <div className='text-body-1'>
                    <h1>Xem ở mọi nơi.</h1>
                    <p>Phát trực tuyến không giới hạn phim và chương trình truyền hình trên điện thoại, máy tính bảng, máy tính xách tay và TV.</p>
                </div>
                <div className='img-body-3'>
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-vn.png" alt="" />
                </div>
            </div>
            
        </div>
    )
}

export function NetflixBody4() {
    return (
        <div className='body-container'>
            <div className='body-4'>              
                <div className='img-body-2'>
                    <img src="https://occ-0-395-58.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABbtRHxTEgmwtFXR4vBnwSO9UzWSascscH0PRpGcXYVkyVez31FciwrQ4bmD41KIrsypJG4Bf54yOJL82SDLL54SGCIdZov0ySklR.png?r=df6" alt="" />
                </div>
                <div className='text-body-4'>
                    <h1>Tạo hồ sơ cho trẻ em.</h1>
                    <p>Đưa các em vào những cuộc phiêu lưu với nhân vật được yêu thích trong một không gian riêng. Tính năng này đi kèm miễn phí với tư cách thành viên của bạn.</p>
                </div>
            </div>
        </div>
    )
}

export function NetflixBody5() {
    return (
        <div className='body-container'>
            <h1>Câu hỏi thường gặp</h1>
            <button className='question'>Netflix là gì? <FaPlus id='icon-plus' /> </button>
            <button className='question'>Tôi phải trả bao nhiêu tiền để xem Netflix?<FaPlus id='icon-plus' /> </button>
            <button className='question'>Tôi có thể xem ở đâu? <FaPlus id='icon-plus' /></button>
            <button className='question'>Làm thế nào để hủy? <FaPlus id='icon-plus' /> </button>
            <button className='question'>Tôi có thể xem gì trên Netflix? <FaPlus id='icon-plus' /> </button>
            <button className='question'>Netflix có phù hợp cho trẻ em không? <FaPlus id='icon-plus' /> </button>
            <h3>Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách thành viên của bạn.</h3>
            <div className='email-start'>
                <div className='input-group'>
                    <input type="text"/>
                    <label htmlFor="">Địa chỉ email</label>
                </div>
                <button className='btn-start'>Bắt đầu <FaChevronRight id='icon-next'/></button>
            </div>
        </div>
    )
}


// mobile 

export function NetflixBody6() {
    return (
        <div className='body-container'>
            <div className='body-6'>
                <div className='text-body-6'>
                    <h1>Thưởng thức trên TV của bạn.</h1>
                    <p>Xem trên TV thông minh, Playstation, Xbox, Chromecast, Apple TV, đầu phát Blu-ray và nhiều thiết bị khác.</p>
                </div>
                <div className='img-body-6'>
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
                </div>
            </div>
            
        </div>
    )
}

export function NetflixBody7() {
    return (
        <div className='body-container'>
            <div className='body-7'>              
                <div className='img-body-7'>
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
                        <div className='download-mobi'>
                            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" />
                            <div className='text-download'>
                                <h3>Cậu bé mất tích</h3>
                                <p>Đang tải xuống...</p>
                            </div>
                            <div className='ic-down'>
                                < TfiDownload id='icon-download'/>
                            </div>
                        </div>
                </div>
                <div className='text-body-7'>
                    <h1>Tải xuống nội dung để xem ngoại tuyến.</h1>
                    <p>Lưu lại những nội dung yêu thích một cách dễ dàng và luôn có thứ để xem.</p>
                </div>
                
            </div>
        </div>
    )
}

export function NetflixBody8() {
    return (
        <div className='body-container'>
            <div className='body-8'>
                <div className='text-body-6'>
                    <h1>Xem ở mọi nơi.</h1>
                    <p>Phát trực tuyến không giới hạn phim và chương trình truyền hình trên điện thoại, máy tính bảng, máy tính xách tay và TV.</p>
                </div>
                <div className='img-body-8'>
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-vn.png" alt="" />
                </div>
            </div>
            
        </div>
    )
}

export function NetflixBody9() {
    return (
        <div className='body-container'>
            <div className='body-9'>              
                <div className='img-body-7'>
                    <img src="https://occ-0-395-58.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABbtRHxTEgmwtFXR4vBnwSO9UzWSascscH0PRpGcXYVkyVez31FciwrQ4bmD41KIrsypJG4Bf54yOJL82SDLL54SGCIdZov0ySklR.png?r=df6" alt="" />
                </div>
                <div className='text-body-9'>
                    <h1>Tạo hồ sơ cho trẻ em.</h1>
                    <p>Đưa các em vào những cuộc phiêu lưu với nhân vật được yêu thích trong một không gian riêng. Tính năng này đi kèm miễn phí với tư cách thành viên của bạn.</p>
                </div>
            </div>
        </div>
    )
}

export function NetflixBody10() {
    return (
        <div className='body-container'>
            <h1>Câu hỏi thường gặp</h1>
            <button className='question'>Netflix là gì? <FaPlus id='icon-plus' /> </button>
            <button className='question'>Tôi phải trả bao nhiêu tiền để xem Netflix?<FaPlus id='icon-plus' /> </button>
            <button className='question'>Tôi có thể xem ở đâu? <FaPlus id='icon-plus' /></button>
            <button className='question'>Làm thế nào để hủy? <FaPlus id='icon-plus' /> </button>
            <button className='question'>Tôi có thể xem gì trên Netflix? <FaPlus id='icon-plus' /> </button>
            <button className='question'>Netflix có phù hợp cho trẻ em không? <FaPlus id='icon-plus' /> </button>
            <h3>Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách thành viên của bạn.</h3>
            <div className='email-start'>
                <div className='input-group'>
                    <input type="text"/>
                    <label htmlFor="">Địa chỉ email</label>
                </div>
                <button className='btn-start'>Bắt đầu <FaChevronRight id='icon-next'/></button>
            </div>
        </div>
    )
}

