export default function Create(){
    return (
        <div>
            <h1>Criação de DevMon</h1>
            <form >
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
                { /* ... imagem, evolui para */}
                <button type="submit">Criar</button>
                <button type="reset">Reiniciar</button>
            </form>
        </div>
    )
}