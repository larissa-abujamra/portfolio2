# portfolio2

Recriação do portfólio de Larissa Oliveira (original: [larissa-abujamra/portfolio26](https://github.com/larissa-abujamra/portfolio26), publicado em larissa-oliveira.com) com animações novas. O repositório original não é alterado.

## O que tem aqui

| Caminho | Conteúdo |
|---|---|
| `content/content.js` | **Todo o conteúdo** do portfólio original, estruturado: textos, projetos, trabalhos criativos, experiência, liderança, esportes, livros, contato, cores e fontes. Fonte única de dados para o novo site. |
| `public/imgs/` | Todas as 87 imagens/vídeo/PDF do original (139 MB; `robotturtle.mp4` sozinho tem 70 MB). |
| `reference/portfolio26-index.html` | Cópia do `index.html` original, só para consulta (os caminhos de imagem dele não resolvem a partir desta pasta). |

Imagens em `public/imgs/` que o site original **não usava**: `fof.png`, `hiro.png`, `lari.png`.

## Estrutura do site original

Era uma página única em React 18 via CDN + Babel no navegador, sem build. Quatro "páginas" trocadas por estado:

1. **Home**
   - Nav fixa (aparece depois de 1,2 s com blur de fundo; menu hambúrguer no mobile)
   - Hero: frase de boas-vindas em Instrument Serif + grade 4×3 de 12 "tiles" ilustrados (3 colunas no mobile)
   - "my work": dois botões grandes, *projects* e *creative*, que fazem um cabo de guerra de largura quando entram na tela
   - About: Education (Iovine and Young Academy), About me, Experience, Leadership & Involvement, Sports background, My Book Shelf (scroll horizontal)
   - Footer
2. **Projects**: 4 projetos principais (Faça Parte, Hiro, Gait, Rumo) + divisor "Web development" (Northstar Robotics, BRASA USC, Vanessa Cesconetto, Tommy's Cart). Habit Tracker existia mas estava oculto. Clicar abre um overlay de estudo de caso que sobe de baixo.
3. **Creative**: grade justificada (linhas com altura igual, larguras pela proporção) com overlay no hover e lightbox.
4. **Contact**: "let's connect" + e-mail e LinkedIn.

## Animações que já existiam

- Frase do hero: fade + subida (1,1 s, ease-out expo)
- Tiles do hero: aparecem um a um com 55 ms de intervalo
- Indicador "scroll" pulsando
- Ticker infinito (definido no código, mas não estava sendo renderizado)
- Botões my work: cabo de guerra de `flex-grow` em 8 s
- Cards: revelação ao rolar (IntersectionObserver), elevação + zoom na imagem no hover
- Overlay de projeto: desliza de baixo para cima

## Identidade visual

- Fundo `#f0ebe0` (creme), tinta `#16120c`, acento azul `oklch(52% 0.16 240)`
- Fontes: **Clash Display** (Fontshare) e **Instrument Serif** (Google Fonts)
