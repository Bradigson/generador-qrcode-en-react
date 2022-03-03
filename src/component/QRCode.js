import QRCode from 'qrcode.react';
import {useState} from 'react';
import '../asset/QRCode.css'
const QrCode = ()=>{
    const [url, setUrl] = useState('');
    const [bgColor, setBgColor] = useState('#eee')
    const [fgColor, setFgColor] = useState('#000')

    const handleChange = e=>{
        setUrl(e.target.value);
    }
    const handlebgColor = (e)=>{
        setBgColor(e.target.value);
    }
    const handlefgColor = (e)=>{
        setFgColor(e.target.value);
    }
    const qrCode = (
        <QRCode
        id='qrCodeId'
        size={300}
        value={url}
        bgColor={bgColor}
        fgColor={fgColor}
        level='Q'
        />
    )
    return(
        <div className='container'>

            <form className='form p-4'>
                <h1 className='text-center'>QRCode Generator</h1>
                <input 
                autoFocus
                type='text'
                placeholder='enter your url'
                className='form-control' 
                value={url} 
                onChange={handleChange}/>
                <div className='controllers'>
                    <input
                    type='text'
                    placeholder='change background color'
                    className='form-control input'
                    onChange={handlebgColor}
                    />
                    <input
                    type='text'
                    placeholder='change QRcode color'
                    className='form-control'
                    onChange={handlefgColor}
                    />
                </div>
            </form>
            <div className='qrcode text-center'>
                {qrCode}
            </div>
        </div>
    )
}


export default QrCode;