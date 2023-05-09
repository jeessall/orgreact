import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {
    
    const times = [
        'Tutora',
        'Pet'
        ]

const aoSalvar = (evento) => {
    evento.preventDefault()
}

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha o campos para cadastrar um membro de sua família.</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome.."/>
                <CampoTexto obrigatorio={true} label="Profissão" placeholder="Digite seu cargo.."/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem.."/>
                <ListaSuspensa obrigatorio={true} label="Quem é você?" itens={times}/>
                <Botao>
                    Criar cards
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;