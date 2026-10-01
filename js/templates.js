import imagemQuemSomos from "../imagens/quem-somos.webp";
import imagemDoacoes from "../imagens/doacoes.webp";
import imagemVoluntariado from "../imagens/voluntariado.webp";
import imagemContato from "../imagens/contato.webp";

// ==================== TEMPLATES DA SPA ====================

export const templates = {

    // ==================== QUEM SOMOS ====================

    sobre: `
        <section class="pagina-interna">

            <div class="pagina-hero">

                <div class="pagina-hero-texto">
                    <span class="secao-tag">Quem somos</span>

                    <h1>Transformando solidariedade em novas oportunidades.</h1>

                    <p>
                        A Nova Chance nasceu com o propósito de aproximar
                        pessoas que querem ajudar de comunidades que precisam
                        de apoio, criando oportunidades por meio da
                        solidariedade e da colaboração.
                    </p>
                </div>

                <div class="pagina-hero-imagem">
                   <img src="${imagemQuemSomos}" loading="lazy"
     alt="Equipe da ONG Nova Chance">
                </div>

            </div>


            <div class="sobre-historia">

                <div>
                    <span class="secao-tag">Nossa história</span>

                    <h2>Uma iniciativa criada para fazer a diferença.</h2>
                </div>

                <div>
                    <p>
                        A ONG Nova Chance surgiu da vontade de contribuir
                        com pessoas em situação de vulnerabilidade e criar
                        uma rede de apoio capaz de gerar impacto positivo
                        na comunidade.
                    </p>

                    <p>
                        Por meio de campanhas de doação, ações sociais e
                        programas de voluntariado, buscamos unir pessoas,
                        recursos e boas ideias para construir novas
                        oportunidades.
                    </p>
                </div>

            </div>


            <div class="valores">

                <article class="valor-card">
                    <span>01</span>

                    <h3>Missão</h3>

                    <p>
                        Promover oportunidades e apoio para pessoas e
                        comunidades por meio de ações sociais acessíveis
                        e colaborativas.
                    </p>
                </article>


                <article class="valor-card">
                    <span>02</span>

                    <h3>Visão</h3>

                    <p>
                        Construir uma sociedade em que mais pessoas tenham
                        acesso a oportunidades, apoio e condições para
                        transformar suas próprias histórias.
                    </p>
                </article>


                <article class="valor-card">
                    <span>03</span>

                    <h3>Valores</h3>

                    <p>
                        Solidariedade, respeito, transparência, colaboração
                        e compromisso com as pessoas fazem parte de tudo
                        o que fazemos.
                    </p>
                </article>

            </div>

        </section>

            `,

    // ==================== CAMPANHAS DE DOAÇÃO ====================

    doacoes: `
        <section class="pagina-interna">

            <div class="pagina-hero">

                <div class="pagina-hero-texto">
                    <span class="secao-tag">Campanhas de doação</span>

                    <h1>Uma doação pode transformar uma história.</h1>

                    <p>
                        Nossas campanhas arrecadam alimentos, roupas e outros
                        recursos essenciais para apoiar famílias e pessoas
                        em situação de vulnerabilidade.
                    </p>
                </div>

                <div class="pagina-hero-imagem">
                   <img src="${imagemDoacoes}" loading="lazy"
                         alt="Voluntários organizando doações">
                </div>

            </div>

            <div class="sobre-historia">

                <div>
                    <span class="secao-tag">Como ajudar</span>

                    <h2>Pequenas contribuições geram grandes mudanças.</h2>
                </div>

                <div>
                    <p>
                        Durante nossas campanhas, recebemos diferentes tipos
                        de doações que são organizadas e destinadas às pessoas
                        atendidas pelos projetos da Nova Chance.
                    </p>

                    <p>
                        Cada contribuição fortalece nossa rede de solidariedade
                        e ajuda a ampliar o alcance das ações realizadas pela ONG.
                    </p>
                </div>

            </div>

            <div class="valores">

                <article class="valor-card">
                    <span>01</span>
                    <h3>Alimentos</h3>
                    <p>
                        Arrecadamos alimentos não perecíveis para auxiliar
                        famílias que precisam de apoio.
                    </p>
                </article>

                <article class="valor-card">
                    <span>02</span>
                    <h3>Roupas</h3>
                    <p>
                        Peças em boas condições podem ganhar um novo destino
                        e ajudar quem mais precisa.
                    </p>
                </article>

                <article class="valor-card">
                    <span>03</span>
                    <h3>Contribuições</h3>
                    <p>
                        Outros recursos também ajudam a manter e ampliar
                        as ações sociais realizadas pela Nova Chance.
                    </p>
                </article>

            </div>

        </section>
    `,// ==================== VOLUNTARIADO ====================

    voluntariado: `
        <section class="pagina-interna">

            <div class="pagina-hero">

                <div class="pagina-hero-texto">
                    <span class="secao-tag">Voluntariado</span>

                    <h1>Seu tempo também pode transformar vidas.</h1>

                    <p>
                        Fazer parte da Nova Chance é uma oportunidade de usar
                        seu tempo, suas habilidades e sua disposição para
                        contribuir diretamente com nossas ações sociais.
                    </p>
                </div>

                <div class="pagina-hero-imagem">
                   <img src="${imagemVoluntariado}" loading="lazy"
                         alt="Voluntários participando de uma ação social">
                </div>

            </div>

            <div class="sobre-historia">

                <div>
                    <span class="secao-tag">Faça parte</span>

                    <h2>Existem várias formas de contribuir.</h2>
                </div>

                <div>
                    <p>
                        Os voluntários ajudam na organização de campanhas,
                        distribuição de doações, eventos e outras atividades
                        realizadas pela Nova Chance.
                    </p>

                    <p>
                        Cada pessoa pode contribuir de acordo com sua
                        disponibilidade e suas habilidades, trabalhando
                        junto com outras pessoas em benefício da comunidade.
                    </p>
                </div>

            </div>

            <div class="valores">

                <article class="valor-card">
                    <span>01</span>
                    <h3>Participe</h3>
                    <p>
                        Faça parte das ações e campanhas promovidas pela
                        Nova Chance.
                    </p>
                </article>

                <article class="valor-card">
                    <span>02</span>
                    <h3>Colabore</h3>
                    <p>
                        Compartilhe seu tempo e suas habilidades para
                        contribuir com nossos projetos sociais.
                    </p>
                </article>

                <article class="valor-card">
                    <span>03</span>
                    <h3>Transforme</h3>
                    <p>
                        Trabalhe junto com outras pessoas para gerar
                        impacto positivo na comunidade.
                    </p>
                </article>

            </div>

        </section>
    `,
    // ==================== CONTATO ====================

    contato: `
        <section class="pagina-interna">

            <div class="contato-topo">

                <div class="contato-imagem">
                   <img src="${imagemContato}" loading="lazy"
                         alt="Equipe da Nova Chance conversando">
                </div>

                <div class="contato-intro">
                    <span class="secao-tag">Contato</span>

                    <h1>Vamos conversar?</h1>

                    <p>
                        Quer saber mais sobre nossos projetos, participar
                        das ações ou tirar alguma dúvida? Entre em contato
                        com a equipe da Nova Chance.
                    </p>

                    <div class="contato-info">
                        <div>
                            <span>E-mail</span>
                            <strong>contato@novachance.org</strong>
                        </div>

                        <div>
                            <span>Telefone</span>
                            <strong>(62) 99999-9999</strong>
                        </div>

                        <div>
                            <span>Atendimento</span>
                            <strong>Segunda a sexta, das 8h às 18h</strong>
                        </div>
                    </div>
                </div>

            </div>

            <div class="contato-area">

                <div class="contato-texto">
                    <span class="secao-tag">Fale conosco</span>

                    <h2>Envie uma mensagem para nossa equipe.</h2>

                    <p>
                        Preencha os campos ao lado e conte como podemos
                        ajudar. Nossa equipe entrará em contato assim que
                        possível.
                    </p>
                </div>

                <form class="form-contato">

                    <div class="campo">
                        <label for="contato-nome">Nome</label>
                        <input type="text"
                               id="contato-nome"
                               placeholder="Seu nome"
                               required>
                    </div>

                    <div class="campo">
                        <label for="contato-email">E-mail</label>
                        <input type="email"
                               id="contato-email"
                               placeholder="seuemail@exemplo.com"
                               required>
                    </div>

                    <div class="campo">
                        <label for="contato-assunto">Assunto</label>
                        <input type="text"
                               id="contato-assunto"
                               placeholder="Sobre o que deseja falar?"
                               required>
                    </div>

                    <div class="campo">
                        <label for="contato-mensagem">Mensagem</label>
                        <textarea id="contato-mensagem"
                                  rows="5"
                                  placeholder="Escreva sua mensagem"
                                  required></textarea>
                    </div>

                    <button type="submit" class="btn-principal">
                        Enviar mensagem
                    </button>

                </form>

            </div>

        </section>
        `,

    // ==================== CADASTRO ====================

    cadastro: `
        <section class="pagina-interna">

            <div class="cadastro-layout">

                <div class="cadastro-intro">

                    <span class="secao-tag">Faça parte</span>

                    <h1>Junte-se à Nova Chance.</h1>

                    <p>
                        Preencha seus dados para fazer parte da nossa rede
                        e participar das ações, campanhas e projetos sociais
                        da Nova Chance.
                    </p>

                    <div class="cadastro-beneficios">

                        <div>
                            <span>01</span>
                            <p>Participe de ações e projetos sociais.</p>
                        </div>

                        <div>
                            <span>02</span>
                            <p>Colabore com campanhas de voluntariado.</p>
                        </div>

                        <div>
                            <span>03</span>
                            <p>Ajude a gerar impacto positivo na comunidade.</p>
                        </div>

                    </div>

                </div>


                <div class="cadastro-formulario">

                    <div class="formulario-titulo">
                        <span>Cadastro</span>
                        <h2>Seus dados</h2>
                        <p>Preencha as informações abaixo.</p>
                    </div>

                    <form id="form-cadastro">

                        <div class="campo">
                            <label for="nome">Nome completo</label>
                            <input type="text"
                                   id="nome"
                                   placeholder="Digite seu nome"
                                   required>
                        </div>

                        <div class="campo">
                            <label for="email">E-mail</label>
                            <input type="email"
                                   id="email"
                                   placeholder="seuemail@exemplo.com"
                                   required>
                        </div>

                        <div class="form-linha">

                            <div class="campo">
                                <label for="nascimento">Data de nascimento</label>
                                <input type="date"
                                       id="nascimento"
                                       required>
                            </div>

                            <div class="campo">
                                <label for="cpf">CPF</label>
                                <input type="text"
                                       id="cpf"
                                       placeholder="000.000.000-00"
                                       pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
                                       required>
                            </div>

                        </div>

                        <div class="campo">
                            <label for="telefone">Telefone</label>
                            <input type="tel"
                                   id="telefone"
                                   placeholder="(00) 00000-0000"          
                        </div>

                        <div class="campo">
                            <label for="endereco">Endereço</label>
                            <input type="text"
                                   id="endereco"
                                   placeholder="Rua, avenida..."
                                   required>
                        </div>

                        <div class="form-linha">

                            <div class="campo">
                                <label for="cidade">Cidade</label>
                                <input type="text"
                                       id="cidade"
                                       placeholder="Sua cidade"
                                       required>
                            </div>

                            <div class="campo">
                                <label for="estado">Estado</label>

                                <select id="estado" required>
                                    <option value="">Selecione</option>
                                    <option value="AC">AC</option>
                                    <option value="AL">AL</option>
                                    <option value="AP">AP</option>
                                    <option value="AM">AM</option>
                                    <option value="BA">BA</option>
                                    <option value="CE">CE</option>
                                    <option value="DF">DF</option>
                                    <option value="ES">ES</option>
                                    <option value="GO">GO</option>
                                    <option value="MA">MA</option>
                                    <option value="MT">MT</option>
                                    <option value="MS">MS</option>
                                    <option value="MG">MG</option>
                                    <option value="PA">PA</option>
                                    <option value="PB">PB</option>
                                    <option value="PR">PR</option>
                                    <option value="PE">PE</option>
                                    <option value="PI">PI</option>
                                    <option value="RJ">RJ</option>
                                    <option value="RN">RN</option>
                                    <option value="RS">RS</option>
                                    <option value="RO">RO</option>
                                    <option value="RR">RR</option>
                                    <option value="SC">SC</option>
                                    <option value="SP">SP</option>
                                    <option value="SE">SE</option>
                                    <option value="TO">TO</option>
                                </select>
                            </div>

                        </div>

                        <div class="campo">
                            <label for="cep">CEP</label>
                            <input type="text"
                                   id="cep"
                                   placeholder="00000-000"
                                   pattern="[0-9]{5}-[0-9]{3}"
                                   required>
                        </div>

                        <div class="alerta alerta-sucesso">
                            Cadastro realizado com sucesso!
                        </div>

                        <div class="alerta alerta-info">
                            Confira os dados preenchidos antes de enviar.
                        </div>

                        <button type="submit" class="btn-principal">
                            Finalizar cadastro
                        </button>

                    </form>

                </div>

            </div>

        </section>
    `

};