import('./style.css');
import('./script');

const CheckInternetConnection = () => {
    return <html lang="en" dir="ltr">
    <head>
        <meta charSet={"utf-8"}/>
        <title>Color Palette Generator</title>
        <meta name={"viewport"} content={"width=device-width, initial-scale=1.0"}/>
    </head>
    <body>
    <div className="popup">
        <div className="icon"><i className="uil uil-wifi-slash"></i></div>
        <div className={"details"}>
            <h2 className={"title"}>Lost Connection</h2>
            <p className={"desc"}>Your Network is unavailable, re try in <b>10</b>second.</p>
            <button className={"reconnect"}>Reconnect Now</button>
        </div>
    </div>
    </body>
    </html>
}
export default CheckInternetConnection;