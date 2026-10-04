// Versões em português dos guias systeme.io essenciais. As fontes e a ferramenta vêm do guia
// francês (mesmo `slug`); aqui só está o texto. Cada etapa corresponde, pela ordem, a uma etapa do guia francês.
// Preços: reais, como na página systeme.io/pt/pricing em 4 de outubro de 2026.
// Nomes de menus: em inglês, como no centro de ajuda oficial (help.systeme.io).
import type { TranslatedGuide } from "../i18n";

export const ptGuides: TranslatedGuide[] = [
  {
    slug: "c-est-quoi-systeme-io",
    localSlug: "o-que-e-o-systeme-io",
    question: "O que é o systeme.io e para quem serve?",
    summary: "Uma só ferramenta para as suas páginas, e-mails, cursos e vendas: o que faz, para quem, e os seus limites.",
    intro:
      "O systeme.io é uma ferramenta online “tudo em um” para vender na internet: funis de venda e páginas, e-mails, automações, cursos online, blog, produtos físicos e programa de afiliados, tudo na mesma conta. Existe um plano gratuito, sem cartão de crédito.",
    steps: [
      {
        title: "Entenda a ideia: uma conta em vez de cinco ferramentas",
        text: "Normalmente, junta-se uma ferramenta de landing pages, uma de e-mail, uma plataforma de cursos e uma loja, e depois é preciso ligá-las. O systeme.io reúne essas peças: um contato que se inscreve numa página entra direto nos seus contatos, recebe os seus e-mails e pode comprar na mesma plataforma.",
      },
      {
        title: "Veja o que ele faz",
        text: "Segundo a página oficial de preços (consultada em 4 de outubro de 2026): funis de venda e páginas, envio de e-mails (newsletters e campanhas), regras de automação e workflows, sites e blogs, cursos online e comunidades, produtos físicos com estoque e variantes, cupons, upsells e order bumps, calendário de agendamento, programa de afiliados, e webinars automáticos nos planos Webinar e Ilimitado.",
      },
      {
        title: "Veja para quem é",
        text: "Serve bem para autônomos, coaches, formadores e criadores que vendem produtos digitais (curso, e-book, mentoria) e querem construir uma lista de e-mails. Também serve para pequenas lojas que vendem alguns produtos físicos sem precisar de um catálogo enorme.",
      },
      {
        title: "Conheça os limites",
        text: "O plano gratuito limita o número de funis, campanhas, regras de automação e contatos. Os webinars automáticos exigem um plano pago (Webinar ou Ilimitado). Para produtos físicos, a ajuda oficial explica que o systeme.io não cuida do envio: você despacha as encomendas. Também não há webinars ao vivo.",
      },
      {
        title: "Teste com o plano gratuito",
        text: "O plano gratuito não expira e não pede cartão de crédito. Crie uma conta, monte uma primeira página de captura e envie um e-mail de teste para você mesmo: em uma hora, você saberá se a lógica da ferramenta lhe convém.",
      },
    ],
    pitfalls: [
      "Escolher um plano pago antes de testar o gratuito: muitas vezes ele basta para começar.",
      "Achar que o systeme.io envia as suas encomendas: a entrega de produtos físicos é por sua conta.",
    ],
  },
  {
    slug: "plan-gratuit-systeme-io",
    localSlug: "plano-gratuito-systeme-io",
    question: "O que inclui o plano gratuito do systeme.io?",
    summary: "Os limites exatos do plano gratuito, o que ele realmente permite, e quando passar para um plano pago.",
    intro:
      "O plano gratuito do systeme.io dá acesso às principais funções, em quantidades limitadas. Não pede cartão de crédito. Estes são os limites, tirados da página oficial de preços em 4 de outubro de 2026.",
    steps: [
      {
        title: "Contatos e e-mails",
        text: "Até 2.000 contatos. Envio de e-mails ilimitado e newsletters ilimitadas. Em compensação: 1 campanha de e-mails (sequência automática), 1 tag, 1 regra de automação e 1 workflow.",
      },
      {
        title: "Páginas e sites",
        text: "3 funis de venda com 15 etapas no total, 1 teste A/B, 1 domínio personalizado, 1 site (2 idiomas por site), 1 blog com artigos ilimitados, 1 página de “link na bio”. O armazenamento de arquivos é ilimitado.",
      },
      {
        title: "Vendas",
        text: "0% de taxa de transação cobrada pelo systeme.io (o seu meio de pagamento, como Stripe ou PayPal, mantém as próprias taxas). 1 upsell, 1 order bump, 1 cupom, produtos físicos ilimitados com até 50 variantes.",
      },
      {
        title: "Cursos e o resto",
        text: "1 curso com até 500 alunos, 1 comunidade com membros ilimitados, 1 evento de calendário, o seu próprio programa de afiliados e suporte por e-mail 24 horas por dia. Sem webinar automático, sem sessão de coaching inicial, sem migração gratuita.",
      },
      {
        title: "O que fica visível no plano gratuito",
        text: "Os seus e-mails levam no rodapé um link “Sent with systeme.io”, que é um link de afiliado do systeme.io. Segundo a central de ajuda, ele não pode ser removido no plano gratuito: é preciso um plano pago (Startup, Webinar ou Ilimitado).",
      },
      {
        title: "Quando passar para um plano pago",
        text: "O plano Startup (R$ 95 por mês em 4 de outubro de 2026) passa a valer a pena quando você ultrapassa 2.000 contatos, quer várias sequências de e-mails ou mais de uma regra de automação, ou um segundo curso. O guia de preços detalha os quatro planos.",
      },
    ],
    pitfalls: [
      "Esquecer que só 1 tag está incluída: organize os contatos de forma simples enquanto estiver no plano gratuito.",
      "Criar três funis “só para testar” e depois não conseguir criar um de verdade: apague os rascunhos inúteis.",
    ],
  },
  {
    slug: "combien-coute-systeme-io",
    localSlug: "quanto-custa-o-systeme-io",
    question: "Quanto custa o systeme.io em 2026?",
    summary: "Os 4 planos, os preços mensais e anuais, os limites, e como mudar ou cancelar.",
    intro:
      "O systeme.io tem quatro planos: Gratuito, Startup, Webinar e Ilimitado. Os preços abaixo foram tirados da página oficial em português (em reais) em 4 de outubro de 2026. Podem mudar: confira sempre a página de preços no dia.",
    steps: [
      {
        title: "Preços com pagamento mensal",
        text: "Gratuito: R$ 0. Startup: R$ 95 por mês. Webinar: R$ 200 por mês. Ilimitado: R$ 414 por mês.",
      },
      {
        title: "Preços com pagamento anual",
        text: "Com a cobrança anual, a página mostra R$ 950 por ano para o Startup, R$ 2.000 para o Webinar e R$ 4.140 para o Ilimitado, o equivalente a 2 meses grátis em relação ao mensal.",
      },
      {
        title: "O que muda em cada plano",
        text: "Startup: 5.000 contatos, 10 funis, 10 campanhas, 10 regras de automação, 3 domínios, 5 cursos, alunos ilimitados. Webinar: 10.000 contatos, 50 funis, 100 campanhas e regras, 10 domínios, 20 cursos e até 10 webinars automáticos. Ilimitado: contatos, funis, regras, domínios e cursos ilimitados, além de acesso antecipado a novos recursos.",
      },
      {
        title: "O que é igual em todos",
        text: "Envio de e-mails ilimitado, armazenamento ilimitado, 0% de taxa de transação do lado do systeme.io, programa de afiliados, contas de assistente e subcontas ilimitadas, suporte por e-mail 24 horas por dia. A sessão de coaching inicial está incluída a partir do Startup.",
      },
      {
        title: "Escolha conforme a sua fase",
        text: "Está começando: plano Gratuito. Passou de 2.000 contatos ou quer várias sequências: Startup. Quer webinars automáticos: Webinar (o primeiro plano que os inclui). Tem uma lista grande ou vários projetos: Ilimitado.",
      },
      {
        title: "Mude ou cancele quando quiser",
        text: "Para cancelar, segundo a central de ajuda: foto de perfil, Settings, gestão das assinaturas, os três pontos ao lado da assinatura e depois cancelar. O cancelamento vale a partir da próxima data de pagamento. A FAQ da página de preços diz que a conta volta então ao plano gratuito e que os contatos acima do limite são arquivados, não apagados.",
      },
    ],
    pitfalls: [
      "Comparar um preço anual com um preço mensal: veja a posição do botão de cobrança mensal/anual.",
      "Escolher o plano Webinar “por via das dúvidas”: se não vai fazer webinars automáticos, o Startup costuma bastar.",
    ],
  },
  {
    slug: "creer-son-compte-systeme-io",
    localSlug: "criar-conta-systeme-io",
    question: "Como criar a sua conta no systeme.io e configurá-la bem?",
    summary: "A inscrição gratuita e as configurações a fazer antes da primeira página.",
    intro:
      "A inscrição no plano gratuito não pede cartão de crédito. Antes de montar as suas páginas, algumas configurações evitam surpresas: e-mails que não chegam, pagamentos impossíveis, endereço pouco profissional.",
    steps: [
      {
        title: "Abra a sua conta gratuita",
        text: "No systeme.io, clique no botão para começar gratuitamente e crie a conta com o seu e-mail. A página de preços indica que não é preciso cartão de crédito para começar.",
      },
      {
        title: "Encontre as configurações",
        text: "Quase todas as configurações da conta ficam no mesmo lugar: clique na sua foto de perfil e depois em Settings. O menu da esquerda dá acesso aos e-mails, domínios personalizados, meios de pagamento (Payment Gateways), assinaturas e programa de afiliados.",
      },
      {
        title: "Confirme o endereço do remetente",
        text: "Em Settings, depois Emails, adicione o endereço do remetente e clique no link de confirmação recebido por e-mail. O status passa a verificado. O ideal é um endereço no seu próprio domínio (contato@seusite.com.br).",
      },
      {
        title: "Autentique o seu domínio para os e-mails",
        text: "Ainda em Settings, depois Emails, seção Domains, adicione o domínio (sem “www”): o systeme.io gera três registros CNAME e um registro DMARC para copiar no seu provedor de domínio. A ajuda oficial indica que essa autenticação é obrigatória para enviar e-mails pelo systeme.io e que não é possível com um endereço Gmail ou Yahoo.",
      },
      {
        title: "Conecte um meio de pagamento se for vender",
        text: "Em Settings, depois Payment Gateways, clique em Connect ao lado do Stripe ou do PayPal e siga as etapas. Depois, você poderá ativar esses meios de pagamento em cada funil.",
      },
      {
        title: "Crie uma primeira página para verificar se tudo funciona",
        text: "Crie um funil do tipo Build an Audience, inscreva-se com o seu próprio endereço e verifique se o contato aparece e se o e-mail de boas-vindas chega. O guia da página de captura detalha cada etapa.",
      },
    ],
    pitfalls: [
      "Enviar os primeiros e-mails com um endereço Gmail: a autenticação do domínio é impossível e a entregabilidade sofre.",
      "Montar um funil de venda completo antes de conectar o Stripe ou o PayPal: a página de pagamento não vai conseguir cobrar.",
    ],
  },
  {
    slug: "creer-un-tunnel-de-vente-systeme-io",
    localSlug: "criar-funil-de-vendas-systeme-io",
    question: "Como criar um funil de vendas com o systeme.io?",
    summary: "Os 4 tipos de funil, a ordem das páginas e como ligá-las entre si.",
    intro:
      "Um funil de vendas é uma sequência de páginas que leva o visitante a uma única ação: inscrever-se e depois comprar. No systeme.io, ele substitui ao mesmo tempo a ferramenta de landing pages e a página de pagamento.",
    steps: [
      {
        title: "Crie o funil",
        text: "Vá à aba Sites, clique em Sales funnels e depois em Create. Dê um nome, escolha o domínio e a moeda.",
      },
      {
        title: "Escolha o tipo certo",
        text: "Build an Audience cria uma página de captura e uma página de agradecimento: ideal para recolher e-mails. Sell cria uma página de pagamento e uma de agradecimento. Custom começa do zero. Run an evergreen webinar cria um funil de 3 páginas, só nos planos Webinar e Ilimitado.",
      },
      {
        title: "Adicione as páginas que faltam",
        text: "No menu da esquerda do funil, clique em Add step, dê um nome, escolha o tipo (página de captura, página de vendas, página de pagamento, upsell, downsell, agradecimento…) e um modelo. Clique em Edit page para personalizar.",
      },
      {
        title: "Respeite a ordem das páginas",
        text: "A ordem típica é: página de captura, página de vendas, página de pagamento, upsell, downsell, página de agradecimento. A ajuda oficial diz que as etapas precisam seguir essa ordem para o funil funcionar.",
      },
      {
        title: "Ligue as páginas entre si",
        text: "Na página de captura, configure a ação do botão como Submit form e o redirecionamento para a etapa seguinte. Na página de vendas, configure o botão como Open URL com o endereço da página de pagamento. Depois do pagamento, upsell, downsell e agradecimento seguem automaticamente.",
      },
      {
        title: "Ative os pagamentos e teste",
        text: "Nas configurações do funil, marque Stripe e/ou PayPal e salve (as contas precisam estar conectadas antes). Depois percorra o funil inteiro, como um cliente.",
      },
    ],
    pitfalls: [
      "Colocar o upsell antes da página de pagamento: ele deve vir logo depois.",
      "Esquecer de ativar o Stripe ou o PayPal nas configurações do funil, mesmo com as contas conectadas.",
      "No plano gratuito, esquecer o limite de 3 funis e 15 etapas no total.",
    ],
  },
  {
    slug: "creer-une-page-de-capture-systeme-io",
    localSlug: "criar-pagina-de-captura-systeme-io",
    question: "Como criar uma página de captura (landing page) com o systeme.io?",
    summary: "Uma página que recolhe e-mails, com o e-mail de boas-vindas enviado sozinho.",
    intro:
      "Uma página de captura (ou landing page) tem um único objetivo: obter o e-mail do visitante em troca de algo útil. Com o systeme.io, a página, a lista de contatos e o e-mail de boas-vindas ficam na mesma ferramenta.",
    steps: [
      {
        title: "Prepare a sua oferta gratuita",
        text: "Antes de abrir a ferramenta, decida o que o visitante recebe: um guia em PDF, uma lista, um vídeo, um desconto. Escreva um título que anuncie o resultado (“Receba 10 ideias de jantar prontas em 20 minutos”) em vez de falar do seu produto.",
      },
      {
        title: "Crie um funil Build an Audience",
        text: "Em Sites, Sales funnels, clique em Create e escolha Build an Audience. O systeme.io cria uma página de captura e uma página de agradecimento. Num funil existente, use Add step com o tipo de página de captura.",
      },
      {
        title: "Escolha um modelo e edite a página",
        text: "Selecione um modelo e clique em Edit page. Troque o título, o texto e a imagem. Use pouco texto: o título, três benefícios, o formulário.",
      },
      {
        title: "Configure o formulário",
        text: "Peça o mínimo de informações: muitas vezes, só o e-mail basta. Configure o botão como Submit form, com redirecionamento para a etapa seguinte, para levar o inscrito à página de agradecimento.",
      },
      {
        title: "Envie o e-mail de boas-vindas automaticamente",
        text: "Em Automations, depois Rules, clique em Create. Como gatilho, escolha a inscrição na sua página (opt-in). Como ação, Send email: crie o e-mail com o link do seu presente e salve a regra.",
      },
      {
        title: "Teste com o seu próprio endereço",
        text: "Abra a página no celular, inscreva-se e verifique se chega à página de agradecimento, se o contato aparece nos seus contatos e se o e-mail de boas-vindas chega.",
      },
    ],
    pitfalls: [
      "Pedir nome, sobrenome, telefone e e-mail: cada campo a mais afasta inscritos.",
      "Prometer um presente e esquecer de enviá-lo: teste o e-mail de boas-vindas antes de divulgar a página.",
    ],
  },
  {
    slug: "connecter-son-nom-de-domaine-a-systeme-io",
    localSlug: "conectar-dominio-systeme-io",
    question: "Como conectar o seu domínio ao systeme.io?",
    summary: "Os dois CNAME a criar no provedor do domínio, o redirecionamento e a página inicial.",
    intro:
      "Com o seu próprio domínio, as suas páginas inspiram mais confiança. O plano gratuito inclui 1 domínio personalizado (3 no Startup, 10 no Webinar, ilimitados no Ilimitado, em 4 de outubro de 2026).",
    steps: [
      {
        title: "Adicione o domínio no systeme.io",
        text: "Clique na foto de perfil, depois em Settings, Custom Domain e Add domain. Digite o domínio com “www” na frente (www.seusite.com.br) e clique em Save.",
      },
      {
        title: "Copie os dois CNAME exibidos",
        text: "Uma janela mostra dois registros CNAME: um para o “www” e outro para validar o certificado. Os valores são próprios da sua conta: copie-os exatamente.",
      },
      {
        title: "Crie-os no provedor do domínio",
        text: "Na zona DNS do domínio (Registro.br, GoDaddy, Cloudflare, Hostinger…), crie dois registros CNAME com esses nomes e valores. Você pode verificar a propagação em dnschecker.org digitando o nome completo.",
      },
      {
        title: "Redirecione o domínio sem “www”",
        text: "Na maioria dos provedores, crie um redirecionamento de seusite.com.br para www.seusite.com.br. Na Hostinger, a ajuda indica criar um registro ALIAS na raiz para o mesmo destino do CNAME “www”.",
      },
      {
        title: "Espere e depois escolha a página inicial",
        text: "A propagação pode levar de 24 a 48 horas. Depois, defina o que aparece no endereço principal: nas configurações de um blog, de um site ou de uma página de funil, deixe vazio o campo do caminho da URL.",
      },
    ],
    pitfalls: [
      "Conectar um domínio que já tem outro site: segundo a ajuda, o site antigo deixa de funcionar.",
      "Errar o ponto final nos valores CNAME (alguns provedores exigem, outros recusam): siga o guia do seu provedor.",
    ],
  },
  {
    slug: "vendre-un-produit-numerique-avec-systeme-io",
    localSlug: "vender-produto-digital-systeme-io",
    question: "Como vender um produto digital (e-book, PDF, acesso) com o systeme.io?",
    summary: "A página de pagamento, o preço e a entrega automática do arquivo depois da compra.",
    intro:
      "O systeme.io cobra o pagamento e entrega o produto sozinho: acesso a um curso, a uma comunidade, ou um arquivo enviado por e-mail. Ele substitui uma loja de produtos digitais, sem taxa de transação cobrada pelo systeme.io.",
    steps: [
      {
        title: "Conecte um meio de pagamento",
        text: "Antes de tudo, conecte o Stripe ou o PayPal em Settings, Payment Gateways. Sem isso, a página de pagamento não consegue cobrar nada.",
      },
      {
        title: "Crie um funil Sell",
        text: "Em Sites, Sales funnels, Create, escolha Sell e a moeda. Você recebe uma página de pagamento e uma de agradecimento. Adicione uma página de vendas antes da de pagamento se a oferta precisar de explicação.",
      },
      {
        title: "Configure um produto digital",
        text: "Abra a página de pagamento, vá a Choose offer type e selecione Digital Product. Clique em + para criar o produto, dê um nome e adicione o recurso entregue: um curso, um pacote de cursos, uma comunidade, um evento de calendário ou uma tag.",
      },
      {
        title: "Defina o preço",
        text: "Adicione um plano de preço à oferta. Segundo a ajuda oficial, há três tipos: pagamento único, assinatura (com período de teste opcional) e pagamento parcelado. O produto não pode ser salvo sem preço.",
      },
      {
        title: "Entregue um arquivo (e-book, PDF)",
        text: "Para um arquivo, adicione uma tag como recurso e crie uma regra de automação: gatilho de nova venda, ação Send email, com o arquivo anexado (máximo 5 MB) ou um link de download. Você também pode colocar o link de download na página de agradecimento.",
      },
      {
        title: "Faça uma compra de teste",
        text: "Faça um pedido você mesmo e verifique o pagamento, a página de agradecimento e a entrega do arquivo ou do acesso. A central de ajuda explica como fazer uma compra de teste.",
      },
    ],
    pitfalls: [
      "Anexar um arquivo com mais de 5 MB: comprima-o ou envie um link de download.",
      "Esquecer os campos de e-mail e nome na página de pagamento: o Stripe precisa deles.",
    ],
  },
  {
    slug: "creer-une-sequence-d-e-mails-automatique-systeme-io",
    localSlug: "criar-sequencia-de-e-mails-systeme-io",
    question: "Como criar uma sequência automática de e-mails com o systeme.io?",
    summary: "Uma série de e-mails enviados sozinhos depois da inscrição, com os intervalos que você escolher.",
    intro:
      "No systeme.io, uma sequência automática chama-se “campanha” (Campaign): uma série de e-mails enviados por ordem, com um intervalo entre cada um. É a ferramenta ideal para receber um novo inscrito e depois apresentar a sua oferta. O plano gratuito permite 1 campanha (10 no Startup).",
    steps: [
      {
        title: "Crie a campanha",
        text: "Vá a Emails, depois Campaigns, e clique em Create. Dê um nome claro (por exemplo “Boas-vindas – guia grátis”), escolha um remetente já confirmado e uma descrição, e salve.",
      },
      {
        title: "Escreva os e-mails",
        text: "Abra a campanha e clique em Create para cada e-mail. Uma estrutura simples: dia 0, o presente prometido; dia 2, uma dica útil; dia 4, uma história ou um caso de cliente; dia 6, a sua oferta.",
      },
      {
        title: "Defina os intervalos",
        text: "Para cada e-mail, escolha o e-mail que vem antes e o intervalo depois dele, e se necessário a hora e os dias de envio. Um e-mail só sai quando todas as condições são cumpridas: mantenha simples.",
      },
      {
        title: "Ative cada e-mail",
        text: "Na lista da campanha, clique nos três pontos ao lado do e-mail e depois em Activate. Um e-mail não ativado fica fora da sequência.",
      },
      {
        title: "Inscreva os contatos automaticamente",
        text: "Crie uma regra de automação com a inscrição na sua página de captura como gatilho e uma ação de inscrição na campanha. Ao importar contatos (CSV), você também pode escolher uma campanha.",
      },
    ],
    pitfalls: [
      "Adicionar um e-mail no início de uma sequência já em andamento: os contatos que já passaram dessa etapa não o recebem.",
      "Nunca reler a sequência: inscreva-se você mesmo para receber cada e-mail como um contato real.",
    ],
  },
  {
    slug: "creer-et-vendre-une-formation-en-ligne-systeme-io",
    localSlug: "criar-e-vender-curso-online-systeme-io",
    question: "Como criar e vender um curso online com o systeme.io?",
    summary: "Módulos e aulas, tipo de acesso, e a venda com acesso automático dos alunos.",
    intro:
      "O systeme.io hospeda o seu curso (vídeos, textos, arquivos) numa área de membros e libera o acesso automaticamente depois do pagamento. Substitui uma plataforma de cursos separada. O plano gratuito permite 1 curso e 500 alunos; a partir do Startup, os alunos são ilimitados (4 de outubro de 2026).",
    steps: [
      {
        title: "Crie o curso",
        text: "Vá a Assets, depois Courses, e clique em Add a new course. Indique o nome, o domínio e o caminho da URL, escolha um tema para a área de membros e salve.",
      },
      {
        title: "Adicione os módulos",
        text: "Clique em Add module, dê um nome e salve. Um módulo agrupa várias aulas sobre o mesmo tema.",
      },
      {
        title: "Adicione as aulas",
        text: "Dentro de um módulo, clique em Add lecture. Indique o nome, um eventual intervalo depois da aula anterior (para acesso gradual) e ative os comentários se quiser trocas, depois salve. Adicione o conteúdo e ative os módulos e as aulas.",
      },
      {
        title: "Coloque o curso à venda",
        text: "Num funil Sell, na página de pagamento, escolha Digital Product, crie o produto com o + e adicione o curso como recurso. Adicione um preço: sem ele, o produto não pode ser salvo.",
      },
      {
        title: "Escolha o tipo de acesso",
        text: "Há quatro tipos: acesso total (tudo, já), acesso parcial (só alguns módulos), conteúdo gradual (as aulas são liberadas conforme os intervalos) e acesso parcial com conteúdo gradual. Também dá para definir uma data de liberação e, no acesso total, um prazo de expiração em dias.",
      },
      {
        title: "Verifique a chegada de um aluno",
        text: "Depois da compra, o aluno recebe automaticamente um e-mail para definir a senha. Faça uma compra de teste: a ajuda diz que esse e-mail de acesso não pode ser alterado, por isso leia-o para saber o que os seus alunos vão ver.",
      },
    ],
    pitfalls: [
      "Esquecer de ativar os módulos e as aulas: os alunos não veem nada.",
      "Achar que o intervalo de uma aula conta desde o início: conta a partir da aula anterior.",
    ],
  },
  {
    slug: "systeme-io-ou-leadpages",
    localSlug: "systeme-io-ou-leadpages",
    question: "systeme.io ou Leadpages: qual escolher para as suas landing pages?",
    summary: "Preços oficiais, o que está incluído, e em que casos cada um é a melhor escolha.",
    intro:
      "O Leadpages é uma ferramenta especializada em landing pages. O systeme.io também faz páginas, mas junta e-mails, pagamentos, cursos e afiliados. A pergunta certa é: você precisa só de páginas, ou também de todo o resto?",
    steps: [
      {
        title: "Compare os preços",
        text: "Consultado em 4 de outubro de 2026 nas páginas oficiais: Leadpages Grow US$ 99/mês (US$ 79 no plano anual), Optimize US$ 199 (US$ 159), Scale US$ 399 (US$ 319), com um teste de 7 dias que pede cartão. systeme.io: plano gratuito sem cartão, depois Startup R$ 95/mês, Webinar R$ 200, Ilimitado R$ 414.",
      },
      {
        title: "Veja o que está incluído",
        text: "Todos os planos do systeme.io incluem envio de e-mails ilimitado, página de pagamento sem taxa de transação do lado do systeme.io e programa de afiliados. Com o Leadpages, em geral você liga uma ferramenta de e-mail e uma de pagamento à parte, cada uma com a sua assinatura.",
      },
      {
        title: "O que o Leadpages faz bem",
        text: "Uma ferramenta focada numa só tarefa: biblioteca de modelos de páginas, testes A/B (a partir do plano Grow, segundo a página de preços) e muitas integrações. Se você já tem uma ferramenta de e-mail e uma loja de que gosta, ele encaixa na sua estrutura atual.",
      },
      {
        title: "O que o systeme.io faz melhor",
        text: "Tudo está ligado sem integrações: a página de captura alimenta a lista, a lista recebe a sequência de e-mails, a página de pagamento dá acesso ao curso. Para começar, o plano gratuito permite 3 funis, 2.000 contatos e 1 domínio personalizado.",
      },
      {
        title: "Decida",
        text: "Escolha o systeme.io se está começando, vende produtos digitais ou quer menos assinaturas. Escolha o Leadpages se só quer landing pages e o resto das ferramentas já está no lugar.",
      },
    ],
    pitfalls: [
      "Comparar só o preço das páginas: some também a ferramenta de e-mail e a de pagamento necessárias ao lado do Leadpages.",
      "Esquecer que os preços do Leadpages estão em dólares e podem variar com o país e os impostos.",
    ],
  },
  {
    slug: "systeme-io-ou-shopify",
    localSlug: "systeme-io-ou-shopify",
    question: "systeme.io ou Shopify: qual escolher para vender online?",
    summary: "Produtos digitais ou catálogo físico: os preços, os pontos fortes de cada um e como escolher.",
    intro:
      "A Shopify é uma plataforma de loja virtual, pensada para vender muitos produtos físicos. O systeme.io é pensado para vender produtos digitais, cursos e mentorias com funis e e-mails, e também consegue vender alguns produtos físicos.",
    steps: [
      {
        title: "Compare os preços",
        text: "Consultado em 4 de outubro de 2026 em shopify.com (exibido em dólares no nosso acesso): Basic US$ 39/mês (US$ 29 no anual), Grow US$ 105 (US$ 79), Advanced US$ 399 (US$ 299), Plus a partir de US$ 2.300. Teste de 3 dias e depois US$ 1/mês durante 3 meses. systeme.io: gratuito, depois R$ 95, R$ 200 ou R$ 414/mês. Os preços da Shopify variam conforme o país.",
      },
      {
        title: "Veja as taxas sobre as vendas",
        text: "O systeme.io não cobra taxa de transação (0% em todos os planos): só valem as taxas do Stripe ou do PayPal. A Shopify indica taxas de transação para meios de pagamento de terceiros (2% no Basic) se você não usar o Shopify Payments.",
      },
      {
        title: "O que a Shopify faz melhor",
        text: "Catálogo de produtos físicos: temas de loja, gestão avançada de frete, aplicativos, venda em vários canais. A ajuda do systeme.io diz que ele não cuida do envio nem da preparação dos pedidos.",
      },
      {
        title: "O que o systeme.io faz melhor",
        text: "Vender um produto digital ou um curso com um funil completo: página de captura, sequência de e-mails, página de pagamento, upsell, acesso automático ao curso, programa de afiliados. Na Shopify, isso costuma exigir aplicativos extras.",
      },
      {
        title: "Decida",
        text: "Escolha a Shopify se o seu negócio é uma loja com muitos produtos físicos para enviar. Escolha o systeme.io se vende sobretudo produtos digitais (curso, e-book, mentoria) ou poucos produtos físicos, e quer construir uma lista de e-mails.",
      },
    ],
    pitfalls: [
      "Escolher a Shopify para vender um único curso: você paga uma loja completa e aplicativos por algo que o systeme.io inclui.",
      "Escolher o systeme.io para um catálogo de centenas de produtos com frete complexo: não é o ponto forte dele.",
    ],
  },
];
