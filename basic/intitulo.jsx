import Titulos from "../../Components/Titulos";

export default function intitulo(){

    const bords = {
        width:"360px",
        height:"360px",
        border:"2px dotted #dbf507",
        borderRadius:"8px",
        margin:"100px",
        padding:"10px",
        textAlign:"center",
    }

    return(
        <div style={bords}>
            <Titulos
            primeiro = "faça seu cadastro"
            secundario = "Crie sua conta aqui"
            />
            <Titulos 
            primeiro = "Crie seu login"
            secundario = "Sua senha"
            />
            <Titulos 
            primeiro = "Salve seus dados"
            secundario = "crie aqui"
            pequeno={true}
            />
        </div>
    )
}