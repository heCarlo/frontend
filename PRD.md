# PRD - Documento de Requisitos do Produto

## Introdução & Objetivo

A empresa enfrenta desafios com seu sistema manual de manutenção, como desorganização e comunicação ineficaz, que impactam a produtividade. O objetivo é desenvolver uma aplicação web que otimize o gerenciamento de manutenção, promovendo melhor comunicação e organização. A solução permitirá o registro e monitoramento eficientes das solicitações de manutenção, garantindo acesso fácil ao histórico e facilitando a gestão das atividades. Com uma interface intuitiva e funcionalidades robustas, a aplicação centralizará dados, automatizará processos e melhorará a produtividade, reduzindo custos e interrupções na produção.

## Por que Implementar Isto?

A implementação deste sistema visa resolver problemas críticos do sistema manual atual, como desorganização e comunicação ineficaz, que afetam a produtividade e geram custos elevados. Ao centralizar dados e automatizar processos, o sistema promete melhorar a comunicação entre equipes, reduzir atrasos e aumentar a eficiência operacional. Essa solução não apenas alinha a empresa às demandas de mercado por tecnologias mais eficientes, mas também oferece uma base sólida para redução de custos e melhor gestão, agregando valor significativo ao negócio e garantindo uma vantagem competitiva.

## Público Alvo

A aplicação será utilizada principalmente por dois grupos de usuários dentro da empresa:

| Perfil de usuário       | Descrição, necessidades e interesses.                                                                 |
|-------------------------|--------------------------------------------------------------------------------------------------------|
| Primeiro grupo de usuários | Precisam cadastrar solicitações de manutenção e informar o status, registrar atividades e acompanhar o estoque de peças. |
| Segundo grupo de usuários  | Necessitam de uma visão geral das atividades de manutenção, relatórios detalhados e controle do estoque de peças. |

## Personas

1. **Ana Júlia:** Técnico de manutenção com 5 anos de experiência. Busca um sistema fácil de usar para registrar problemas, acompanhar o status das solicitações e acessar rapidamente o histórico de manutenção.
2. **Camila Yukari:** Gerente de manutenção responsável por supervisionar as atividades da equipe e garantir a eficiência dos processos. Precisa de uma visão geral do status das solicitações e relatórios detalhados.

## Requisitos Funcionais

### Gerenciamento de Máquinas
1. **F1:** Cadastro de Máquinas
   - **Descrição:** O sistema deve permitir o cadastro completo de máquinas, incluindo nome, tipo, modelo, data de fabricação, número de série, localização e histórico de manutenção.
   - **Critérios de Aceitação:** Cadastro realizado com sucesso, dados armazenados localmente e histórico de manutenção acessível.
   - **Prioridade:** [P1]

2. **F2:** Visualização Detalhada de Máquinas
   - **Descrição:** O sistema deve permitir a visualização detalhada de cada máquina, incluindo histórico de manutenções, informações sobre peças e materiais utilizados.
   - **Critérios de Aceitação:** Detalhes da máquina exibidos corretamente, com histórico e informações completas.
   - **Prioridade:** [P1]

### Gerenciamento de Manutenções
3. **F3:** Cadastro de Solicitações de Manutenção
   - **Descrição:** O sistema deve permitir o registro de solicitações de manutenção, incluindo descrição do problema, data da solicitação, prioridade, responsável e status.
   - **Critérios de Aceitação:** Solicitação registrada corretamente e informações acessíveis.
   - **Prioridade:** [P1]

4. **F4:** Gerenciamento do Status da Manutenção
   - **Descrição:** O sistema deve permitir gerenciar o status da manutenção (pendente, em andamento, concluída, cancelada), adicionar comentários e arquivos relacionados.
   - **Critérios de Aceitação:** Status atualizado corretamente, comentários e arquivos adicionados com sucesso.
   - **Prioridade:** [P1]

5. **F5:** Atribuição de Equipes
   - **Descrição:** O sistema deve permitir a atribuição de equipes de manutenção às solicitações
   - **Critérios de Aceitação:** Equipes atribuídas corretamente e registro de peças e materiais realizado com sucesso.
   - **Prioridade:** [P1]

6. **F6:** Registrar as peças e materiais utilizados
   - **Descrição:** Registrar as peças e materiais utilizados, incluindo quantidade e fornecedor.
   - **Critérios de Aceitação:** Registro de peças e materiais realizado com sucesso.
   - **Prioridade:** [P1]

7. **F7:** Geração de Relatórios de Manutenção
   - **Descrição:** O sistema deve gerar relatórios de manutenção por máquina, por período e por tipo de manutenção (preventiva, corretiva, etc.).
   - **Critérios de Aceitação:** Relatórios gerados corretamente e informações apresentadas conforme solicitado.
   - **Prioridade:** [P1]

### Controle de Estoque de Peças
8. **F8:** Cadastro de Peças de Reposição
   - **Descrição:** O sistema deve permitir o cadastro de peças de reposição, incluindo nome, código, fornecedor, quantidade em estoque e valor unitário.
   - **Critérios de Aceitação:** Cadastro realizado corretamente e informações acessíveis.
   - **Prioridade:** [P1]

9. **F9:** Registro de Entrada e Saída de Peças
   - **Descrição:** O sistema deve permitir registrar a entrada e saída de peças, com data e quantidade.
   - **Critérios de Aceitação:** Registros realizados corretamente e atualizações de estoque precisas.
   - **Prioridade:** [P1]

10. **F10:** Visualização e Relatórios de Estoque
   - **Descrição:** O sistema deve permitir visualizar o estoque de peças em tempo real e gerar relatórios de estoque.
   - **Critérios de Aceitação:** Visualização em tempo real e relatórios gerados corretamente.
   - **Prioridade:** [P1]

### Gerenciamento de Equipes
11. **F11:** Cadastro de Equipes
    - **Descrição:** O sistema deve permitir cadastrar as equipes, com informações sobre os colaboradores e suas especialidades.
    - **Critérios de Aceitação:** Cadastro realizado com sucesso e informações acessíveis.
   - **Prioridade:** [P1]

12. **F12:** Atribuição de equipes
    - **Descrição:** O sistema deve permitir atribuir equipes às solicitações de manutenção
    - **Critérios de Aceitação:** Atribuições realizadas corretamente.
   - **Prioridade:** [P1]

13. **F13:** Gerenciamento de Disponibilidade
    - **Descrição:** Gerenciar a disponibilidade dos colaboradores.
    - **Critérios de Aceitação:** Disponibilidade gerenciada com sucesso.
   - **Prioridade:** [P1]

### Autenticação e Autorização
13. **F13:** Criação de Contas de Usuário
    - **Descrição:** O sistema deve permitir a criação de contas de usuário para diferentes tipos de acesso (gerente, técnico, etc.).
    - **Critérios de Aceitação:** Contas criadas com sucesso e acessos controlados conforme perfil.
   - **Prioridade:** [P1]

14. **F14:** Controle de Acessos
    - **Descrição:** O sistema deve controlar o acesso a diferentes funcionalidades da aplicação web, com base no tipo de usuário.
    - **Critérios de Aceitação:** Acesso controlado corretamente e funcionalidades acessíveis conforme permissões. 
   - **Prioridade:** [P1]

## Casos de Uso

### Cadastro e Visualização de Máquinas

1. **Cadastro de Máquinas**
   - **Descrição:** O sistema deve permitir o cadastro completo de máquinas, incluindo nome, tipo, modelo, data de fabricação, número de série, localização e histórico de manutenção.
   - **Usuário:** Técnico de manutenção
   - **Cenário:** O técnico acessa o módulo de cadastro de máquinas, preenche os detalhes necessários e salva as informações. O sistema armazena os dados e disponibiliza o histórico de manutenção associado.

2. **Visualização Detalhada de Máquinas**
   - **Descrição:** O sistema deve permitir a visualização detalhada de cada máquina, incluindo o histórico de manutenções e dados sobre peças e materiais utilizados.
   - **Usuário:** Técnico de manutenção
   - **Cenário:** O técnico seleciona uma máquina para visualização detalhada, acessa o histórico de manutenções e revisa informações sobre peças e materiais utilizados.

### Gestão de Solicitações de Manutenção

3. **Cadastro de Solicitações de Manutenção**
   - **Descrição:** O sistema deve permitir o registro de solicitações de manutenção, incluindo descrição do problema, data da solicitação, prioridade, responsável e status.
   - **Usuário:** Técnico de manutenção
   - **Cenário:** O técnico cria uma nova solicitação de manutenção, insere as informações necessárias e salva. A solicitação é registrada e está disponível para acompanhamento.

4. **Gerenciamento do Status da Manutenção**
   - **Descrição:** O sistema deve permitir gerenciar o status da manutenção (pendente, em andamento, concluída, cancelada), adicionar comentários e arquivos relacionados.
   - **Usuário:** Técnico de manutenção
   - **Cenário:** O técnico atualiza o status de uma solicitação de manutenção, adiciona comentários e anexa arquivos relacionados ao progresso da manutenção.

5. **Atribuição de Equipes**
   - **Descrição:** O sistema deve permitir a atribuição de equipes de manutenção às solicitações.
   - **Usuário:** Gerente de manutenção
   - **Cenário:** O gerente atribui uma equipe a uma solicitação de manutenção e registra as peças e materiais necessários para a tarefa.

### Controle de Estoque

6. **Cadastro de Peças de Reposição**
   - **Descrição:** O sistema deve permitir o cadastro de peças de reposição, incluindo nome, código, fornecedor, quantidade em estoque e valor unitário.
   - **Usuário:** Técnico de manutenção
   - **Cenário:** O técnico cadastra uma nova peça de reposição, insere as informações relevantes e salva. A peça é registrada no sistema e pode ser consultada quando necessário.

7. **Registro de Entrada e Saída de Peças**
   - **Descrição:** O sistema deve registrar a entrada e saída de peças, com data e quantidade.
   - **Usuário:** Técnico de manutenção
   - **Cenário:** O técnico registra a entrada de novas peças no estoque e a saída de peças usadas, atualizando as quantidades disponíveis no sistema.

8. **Visualização e Relatórios de Estoque**
   - **Descrição:** O sistema deve permitir visualizar o estoque de peças em tempo real e gerar relatórios de estoque.
   - **Usuário:** Gerente de manutenção
   - **Cenário:** O gerente visualiza o estoque atual de peças e gera relatórios para análise do inventário e planejamento de compras.

### Gerenciamento de Usuários

9. **Criação de Contas de Usuário**
   - **Descrição:** O sistema deve permitir a criação de contas de usuário para diferentes tipos de acesso, como gerente, técnico, etc.
   - **Usuário:** Gerente de manutenção
   - **Cenário:** O gerente cria uma nova conta de usuário, define o tipo de acesso e configura as permissões conforme necessário.

10. **Controle de Acessos**
    - **Descrição:** O sistema deve controlar o acesso a diferentes funcionalidades da aplicação web com base no tipo de usuário.
    - **Usuário:** Gerente de manutenção
    - **Cenário:** O gerente verifica e ajusta as permissões de acesso dos usuários para garantir que apenas as funcionalidades apropriadas estejam disponíveis para cada tipo de usuário.

## Requisitos Não Funcionais

1. **NF1:** Desempenho
   - **Descrição:** O sistema deve suportar até 500 solicitações de manutenção simultaneamente com um tempo de resposta inferior a 2 segundos.
   - **Critérios de Aceitação:** Testes de desempenho mostram que o sistema atende aos requisitos estabelecidos.
   - **Prioridade:** [P1]

2. **NF2:** Segurança
   - **Descrição:** O sistema deve garantir que apenas usuários autorizados possam acessar e modificar informações sensíveis.
   - **Critérios de Aceitação:** Implementação de autenticação e autorização adequadas, com testes de segurança realizados.
   - **Prioridade:** [P1]

3. **NF3:** Interface amigável e intuitiva
   - **Descrição:** O sistema deve ter uma interface intuitiva e fácil de usar para garantir que os usuários possam realizar suas tarefas sem dificuldades.
   - **Critérios de Aceitação:** Feedback positivo de testes de usabilidade realizados com usuários representativos.
   - **Prioridade:** [P1]

   4. **NF4:** Responsividade
   - **Descrição:** A aplicação web deve funcionar perfeitamente em diferentes dispositivos (computadores, tablets, smartphones).
   - **Critérios de Aceitação:** Testes de responsividade confirmam que a aplicação é utilizável e funcional em diversos tamanhos de tela.
   - **Prioridade:** [P1]

### Métricas


## Fora de Escopo

- Integrações com sistemas de terceiros não especificados.
- Funcionalidades de gestão financeira além do controle de custos de manutenção.

## User Experience

- [Link para UX Flows]
- [Link para UI Designs]

## Dependências

- Acesso a dados históricos de manutenção existentes.
- Disponibilidade de equipe de desenvolvimento para integração de sistemas.

## Plano de Lançamento

1. **Regras para Lançamento Interno:**
   - [ ] Validação do sistema em ambiente de teste.
   - [ ] Divulgação para equipe de manutenção.

## Plano de Comunicação

- **Data:** [Data do Lançamento]
- **Método:** E-mail e notificações no aplicativo.
- **Destinatários:** Equipes de manutenção e gerentes.
