# 🎧 Portfólio: Central de Suporte do Pedro Miguel 👨‍💻

> [!NOTE]
> Portfólio profissional em formato de **central de atendimento**: cada seção é um chamado, e quanto mais o visitante explora, mais o atendimento escala de **N1** para **N3 (pronto para contratar)**.

---

## 🚧 Status do Projeto

![HTML5](https://img.shields.io/badge/HTML5-007ec6?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-007ec6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-007ec6?style=for-the-badge&logo=javascript&logoColor=white) ![Licença](https://img.shields.io/badge/Licença-MIT-007ec6?style=for-the-badge)

**Disciplina:** DIAW (Desenvolvimento e Integração de Aplicações Web) · Engenharia de Software · PUC Minas
**Entrega:** Laboratório 01 · Portfólio Profissional (Sprints 01, 02 e 03)

---

## 📚 Índice
- [Links Úteis](#-links-úteis)
- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Arquitetura](#-arquitetura)
- [Instalação e Execução](#-instalação-e-execução)
- [Configuração do Envio de E-mail](#-configuração-do-envio-de-e-mail-emailjs)
- [Deploy](#-deploy)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Protótipos](#-protótipos-figma)
- [Demonstração](#-demonstração)
- [Como Editar o Conteúdo](#-como-editar-o-conteúdo)
- [Autor](#-autor)
- [Licença](#-licença)

---

## 🔗 Links Úteis
* 🌐 **Site publicado:** [COLE AQUI O LINK DA VERCEL/RENDER](https://seu-site.vercel.app)
* 🎨 **Protótipos no Figma:** [COLE AQUI O LINK DO FIGMA](https://www.figma.com/)
* 💼 **LinkedIn:** [Pedro Miguel](https://www.linkedin.com/in/pedro-miguel-73288130a/)
* 🐙 **GitHub:** [PedroMiguel1712](https://github.com/PedroMiguel1712)

---

## 📝 Sobre o Projeto

Sou **Pedro Miguel Souza Dias**, estudante de Engenharia de Software na PUC Minas e ex-estagiário da Central de Suporte N1 e N2 da Portnet. Portfólios costumam ser iguais entre si, então usei essa vivência para criar algo com identidade própria: o site funciona como um **sistema de chamados** (help desk).

- **Por que existe:** apresentar minha trajetória, habilidades, projetos e formas de contato de maneira moderna e acessível (requisito do Laboratório 01).
- **Ideia central:** o visitante "abre chamados" para me conhecer. O painel de nível de atendimento sobe de N1 (Visitante) para N2 (Em análise) e N3 (Pronto para contratar), e então oferece o botão **Escalar para contratação**, que leva ao contato.
- **Público:** recrutadores, professores e colegas.

---

## ✨ Funcionalidades Principais

- 💬 **Sobre mim em formato de conversa**, em **português e inglês** (botão PT/EN).
- 🗓️ **Projetos** em linha do tempo, do mais antigo ao mais recente, com descrição, tecnologias, link do GitHub e imagem/GIF.
- 💼 **Experiências** organizadas em linha do tempo (empresa/instituição, atividade, período).
- 🎓 **Habilidades e certificados**: linguagens, ferramentas, certificados e idiomas.
- 📨 **Contato**: ícones clicáveis (e-mail, WhatsApp, LinkedIn, GitHub) e formulário com validação que gera um número de chamado.
- 📈 **Escalonamento N1 → N3** conforme a navegação.
- 🌗 **Tema claro e escuro** (respeita a preferência do sistema).
- 📱 **Design responsivo** e foco visível para navegação por teclado.

---

## 🛠 Tecnologias Utilizadas

### 💻 Front-end
* **Linguagens:** HTML5, CSS3, JavaScript (ES6+), sem frameworks
* **Estilização:** CSS puro com variáveis (tokens de cor para tema claro/escuro), Grid e Flexbox
* **Envio de e-mail:** [EmailJS](https://www.emailjs.com/) (opcional, via API REST) com *fallback* para `mailto:`
* **Prototipação:** Figma

### ⚙️ Infraestrutura
* **Controle de versão:** Git e GitHub
* **Hospedagem:** Vercel (ou Render / GitHub Pages)

### 📦 Dependências
Nenhuma. Não há `npm install`, bibliotecas ou frameworks. O site é estático.

---

## 🏗 Arquitetura

Site estático de página única (SPA simples em JavaScript puro):

- `index.html`: estrutura (cabeçalho, painel de nível, fila de chamados e área do chamado).
- `css/style.css`: identidade visual, tema claro/escuro e responsividade.
- `js/script.js`: dados do conteúdo (`PROJ`, `EXP`, `SK`, `CERT`, `TK`), textos PT/EN (`UI`), renderização, escalonamento e formulário.

Fluxo: `dados + idioma → render() → fila de chamados + chamado atual`. Ao abrir um chamado, ele é registrado em `seen` e o nível de atendimento é recalculado.

---

## 🚀 Instalação e Execução

### Pré-requisitos
- Um navegador moderno (Chrome, Edge, Firefox ou Safari)
- *(Opcional)* Git, e Python 3 ou Node.js para servir os arquivos localmente

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/PedroMiguel1712/portfolio.git
cd portfolio

# 2a. Opção simples: abra o index.html no navegador
# 2b. Ou sirva localmente (recomendado)
python3 -m http.server 5500
# acesse http://localhost:5500
```

Alternativa com Node.js: `npx serve .`

---

## 📧 Configuração do Envio de E-mail (EmailJS)

Sem configuração, o formulário valida os campos e abre o seu app de e-mail com a mensagem preenchida. Para envio direto:

1. Crie uma conta em [emailjs.com](https://www.emailjs.com/) e conecte um serviço de e-mail.
2. Crie um template usando as variáveis `{{from_name}}`, `{{reply_to}}`, `{{message}}` e `{{ticket}}`.
3. Em `js/script.js`, preencha:

```js
var EMAILJS = { service: "SEU_SERVICE_ID", template: "SEU_TEMPLATE_ID", key: "SUA_PUBLIC_KEY" };
```

> A *public key* do EmailJS foi feita para ficar no front-end. Ative as restrições de domínio no painel do EmailJS.

---

## ☁️ Deploy

### Vercel (recomendado)
1. Suba o projeto para o GitHub.
2. Em [vercel.com](https://vercel.com/), clique em **Add New → Project** e importe o repositório.
3. *Framework Preset:* **Other**. Não precisa de build command nem de output directory.
4. Clique em **Deploy** e copie o link para a seção [Links Úteis](#-links-úteis).

### GitHub Pages
**Settings → Pages → Deploy from a branch → `main` / `(root)`**.

---

## 📂 Estrutura de Pastas

```
portfolio/
├── index.html          # Estrutura da página
├── css/
│   └── style.css       # Estilos, temas e responsividade
├── js/
│   └── script.js       # Conteúdo, idiomas, renderização e formulário
├── assets/
│   └── projetos/       # Imagens e GIFs dos projetos
├── docs/               # Prints dos protótipos (Figma) e da demonstração
├── .gitignore
├── LICENSE
└── README.md
```

---

## 🎨 Protótipos (Figma)

> Adicione os wireframes de média fidelidade em `docs/` e referencie aqui.

| Tela | Wireframe |
|------|-----------|
| Início / Sobre mim | ![Sobre mim](docs/wireframe-sobre.png) |
| Projetos | ![Projetos](docs/wireframe-projetos.png) |
| Experiências | ![Experiências](docs/wireframe-experiencias.png) |
| Contato | ![Contato](docs/wireframe-contato.png) |

---

## 🎬 Demonstração

> Adicione prints ou GIFs do site em funcionamento em `docs/`.

![Demonstração do site](docs/demo.gif)

---

## ✏️ Como Editar o Conteúdo

Todo o conteúdo fica no início de `js/script.js`, no bloco **EDITE AQUI**:

| Variável | O que controla |
|----------|----------------|
| `GH`, `WA`, `MAIL`, `LI` | Links de contato |
| `PROJ` | Projetos (ano, nome, descrição PT/EN, tecnologias, link do GitHub) |
| `EXP` | Experiências |
| `SK` e `CERT` | Habilidades e certificados |
| `EMAILJS` | Credenciais do envio de e-mail |

Para adicionar imagem ou GIF a um projeto, coloque o arquivo em `assets/projetos/` e troque o bloco `.shot` por uma tag `<img>` no `body()` do `script.js`.

---

## 👤 Autor

**Pedro Miguel Souza Dias**
Engenharia de Software · PUC Minas (previsão de formatura: 2029)
📧 pedromiguelsd1712@gmail.com · [LinkedIn](https://www.linkedin.com/in/pedro-miguel-73288130a/) · [GitHub](https://github.com/PedroMiguel1712)

Professor da disciplina: João Paulo Carneiro Aramuni.

---

## 📄 Licença

Distribuído sob a licença MIT. Veja o arquivo [LICENSE](LICENSE).
