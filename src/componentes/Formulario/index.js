import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {
    
    const times = [
        'Tutora',
        'Pet'
        ]

        const [nome, setNome] = useState = ('')
        const [profissao, setProfissao] = useState = ('')
        const [imagem, setImagem] = useState = ('')

        

const aoSalvar = (evento) => {
    evento.preventDefault()
}

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha o campos para cadastrar um membro de sua família.</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome.."
                    valor={nome}
                    aoAlterado={valor => setNome (valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Profissão" 
                    placeholder="Digite seu cargo.."
                    valor={profissao}
                    aoAlterado={valor => setProfissao(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem.."
                    valor={imagem}
                    aoAlterado={valor => setImagem (valor)}
                />
                <ListaSuspensa obrigatorio={true} label="Quem é você?" itens={times}/>
                <Botao>
                    Criar cards
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;