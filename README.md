📚 Kindle Mangá Clone (React Native)
Este é um projeto de clone da interface do Amazon Kindle, focado em uma biblioteca de mangás, desenvolvido como atividade prática em React Native.

O aplicativo demonstra o uso combinado de múltiplas formas de navegação (Drawer, Tab e Stack), gerenciamento de estado global com a Context API e a implementação de um tema dinâmico (Modo Claro e Modo Escuro).

O projeto está 100% funcional e pode ser testado diretamente no Snack Expo. (Sugestão: Cole o link do seu Snack aqui)

✨ Funcionalidades Principais
Navegação Aninhada (Completa):

Drawer Navigation (Menu Gaveta): Navegação principal entre a "Biblioteca" e "Configurações".

Bottom Tab Navigation (Abas): Navegação secundária entre a "Estante" e a "Loja".

Stack Navigation (Pilha): Navegação de fluxo, da lista da estante para os detalhes de um mangá.

Gerenciamento de Estado Global (Context API):

Um MangaContext centraliza o estado da aplicação.

Controle da lista de mangás da estante do usuário.

Controle do tema (Modo Claro/Escuro) em todo o app.

Biblioteca Dinâmica:

Adicione mangás da "Loja" para a sua "Estante".

Remova mangás da "Estante" (ação disponível na própria estante ou na tela de detalhes).

A Loja mostra uma tag "Na sua estante" em itens que você já possui.

Modo Escuro (Dark Mode):

Um "switch" na tela de Configurações permite alternar entre os temas Claro e Escuro.

O tema inicial é detectado automaticamente com base na preferência do sistema do usuário.

Toda a interface, incluindo StatusBar, headers de navegação e telas, se adapta ao tema selecionado.

Componentes Funcionais:

Uso de FlatList para renderização otimizada das listas.

Componentes reutilizáveis para os itens da lista (MangaItem, MangaStoreItem).

Ícones vetoriais (@expo/vector-icons).

🛠️ Tecnologias Utilizadas
React Native

Expo (Snack)

React Navigation

@react-navigation/native

@react-navigation/drawer

@react-navigation/bottom-tabs

@react-navigation/native-stack

React Context API

React Hooks (useState, useContext, useLayoutEffect, useColorScheme)

📂 Estrutura do Projeto
/
├── App.js                # Ponto de entrada, configura o MangaProvider e o NavigationContainer
├── MangaContext.js       # O "cérebro" do app (estado da estante e do tema)
├── Abas.js               # Configuração do Bottom Tab Navigator (Estante, Loja)
├── EstanteStack.js       # Configuração do Stack Navigator (Minha Estante -> Detalhes)
│
├── TelaEstante.js        # Tela 1: Mostra apenas os mangás da biblioteca do usuário
├── TelaLoja.js           # Tela 2: Mostra TODOS os mangás, com botões de adicionar
├── TelaDetalhesManga.js  # Tela 3: Mostra detalhes do mangá (sinopse, autor)
└── TelaConfig.js         # Tela 4: Contém o switch para o Modo Escuro
🚀 Como Executar
Via Snack (Recomendado para teste rápido)
Clique aqui para abrir o projeto no Snack Expo (Substitua este link pelo seu link do Snack)

O projeto carregará automaticamente no navegador.

Use os simuladores de Web, Android ou iOS no painel direito para testar a aplicação.

Localmente (Se você clonar este repositório)
Clone o repositório:

Bash

git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
Instale as dependências:

Bash

npm install
# ou
yarn install
Inicie o servidor Expo:

Bash

npx expo start
Escaneie o QR Code gerado com o aplicativo Expo Go no seu celular (Android ou iOS).
