import { useState } from "react";

const AddXML = () => {

    const [xmlData, setXMLData] = useState(true);
    return (
        <div style={{
            display: "flex",
            flexDirection: "row"
        }}>

            <div style={{
                margin: "10px 20px",
                width: "35%"
            }}>
                <label style={{ fontWeight: 600 }}>Input XML</label>
                <textarea style={{ display: "block", marginTop: 10, width: '100%', resize: 'none', borderRadius: 10, border: '1px solid #000000' }} rows={25} placeholder="Add XMl File Data"></textarea>

            </div>
            <div style={{
                margin: "10px 20px",
                width: "30%"
            }}>
                <div style={{marginTop: '40%'}}>
                    <button style={{ display: 'block', margin: 'auto', fontSize: 25, padding: 10, width: 150, borderRadius: 10}} >Send</button>
                    <br />
                    <button style={{ display: 'block', margin: 'auto', fontSize: 25, padding: 10, width: 150, borderRadius: 10}} >Clear</button>
                </div>

            </div>
            <div style={{
                margin: "10px 20px",
                width: "35%"
            }}>
                <label style={{ fontWeight: 600 }}>Response Message</label>
                <div style={{ display: "block", marginTop: 10, width: '100%', borderRadius: 10, border: '1px solid #000000', height: '90%' }} ></div>

            </div>

        </div>
    );

}

export default AddXML;