import { useNavigate } from "react-router-dom"
import { Api } from "../Api/api"
import { toast } from "react-toastify"

export default function Create(){

    const navigate = useNavigate()

    async function handleSubmit(event){
        event.preventDefault()

        const devmon = {
            nome: event.target.nome.value,
            imagem: event.target.imagem.value,
            evoluiPara: event.target.evoluiPara.value
        }

        const apiUrl = Api.personagem.create()

        const response = await Api.buildApiPostRequest(apiUrl, devmon)

        if (response.ok){
            toast.success('DevMon criado com Sucesso!')
            navigate('/')
        }else {
            const body = await response.json()
            toast.error('Erro ao. criar DevMon: ' + body.error)
        }
    }

    return (
        <div>
            <h1>Criação de DevMon</h1>
            <form  onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nome">Nome*:</label><br />
                    <input type="text" id="nome" name="nome" placeholder="Digite o nome."/>
                </div>
                <div>
                    <label htmlFor="imagem">Imagem (URL)*:</label><br />
                    <input type="text" id="imagem" name="imagem" placeholder="Insira a URL da imagem."/>
                </div>
                <div>
                    <label htmlFor="nome">Evolui para (Opcional):</label><br />
                    <input type="text" id="evoluiPara" name="evoluiPara" placeholder="Insira o nome da Evolução."/>
                </div>
                <button type="submit">Criar</button>
                <button type="reset">Reiniciar</button>
            </form>
        </div>
    )
}