# Guia de Conteúdo Visual — Luana Carla Dermo Clinic

## 📋 Visão Geral

Este documento detalha a estratégia visual do site, com especificações técnicas, recomendações de fotografia e diretrizes para implementação de conteúdo que transmita profissionalismo, confiança e acolhimento.

---

## 1. GALERIA DE RESULTADOS (ANTES E DEPOIS)

### Objetivo
Demonstrar transformação real e credibilidade através de resultados visuais tangíveis.

### Implementação Atual
- Componente: `ResultsGallery` em `components/site/sections.tsx`
- Layout: Grid responsivo (1 coluna mobile, 2 colunas tablet, 3 colunas desktop)
- Imagens placeholder já geradas em: `/public/images/results/`

### Especificações de Fotografia

| Aspecto | Recomendação |
|---------|--------------|
| **Resolução** | 1600x1200px (antes/depois individual) |
| **Formato** | JPG (comprimido a 80% qualidade) |
| **Iluminação** | Natural ou LED 5600K — consistente em ambas as fotos |
| **Fundo** | Neutro (cinza claro #D3D3D3 ou branco #F5F5F5) |
| **Posição** | Idêntica — mesma câmera, ângulo, distância |
| **Edição** | Apenas ajuste de exposição — SEM filtros |

### Procedimentos e Timelines

#### Pós-Operatório Assistido
```
Timeline: 7 dias → 14 dias → 30 dias
- Dia 7: Fase inicial de recuperação (edema, cicatrização inicial)
- Dia 14: Melhora significativa (menos edema)
- Dia 30: Recuperação completa (cicatrização avançada)
Foco: Mostrar evolução natural da cicatrização
```

#### Continuidade Corporal
```
Timeline: Baseline → 2 semanas → 4 semanas → 8 semanas
- Baseline: Estado inicial
- 4 semanas: Primeiros resultados visíveis
- 8 semanas: Transformação completa
Foco: Mudança progressiva e consistente
```

#### Depilação a Laser
```
Timeline: Antes → 1ª Sessão → 4ª Sessão
- Antes: Densidade original de pelos
- Após 1ª: Redução inicial (40-50%)
- Após 4ª: Redução significativa (80-90%)
Foco: Progressão do resultado laser
```

### Consentimento e Privacidade
- [ ] Obter autorização por escrito do paciente
- [ ] Usar modelo de consentimento que inclua:
  - Permissão para usar fotos no site
  - Direito de remover fotos a qualquer momento
  - Garantia de privacidade (rosto não visível quando possível)

---

## 2. DEPOIMENTOS VISUAIS

### Objetivo
Criar prova social autêntica e aumentar engajamento através de histórias reais.

### Implementação Atual
- Componente: `TestimonialsSection` em `components/site/sections.tsx`
- Layout: Grid 2-3 colunas com cards com avatar e quote

### Formatos de Depoimento

#### Opção 1: Foto + Citação (Implementada)
```
Uso: Cards na homepage
- Avatar circular (iniciais ou foto)
- Nome completo
- Procedimento realizado
- Citação (150-200 caracteres)
- 5 estrelas (visual rating)
```

#### Opção 2: Vídeo Curto (Futuro)
```
Especificações:
- Duração: 15-30 segundos
- Resolução: 1080p (16:9 ou 9:16 para mobile)
- Iluminação: Natural, bem iluminado
- Áudio: Som ambiente ou voz clara
- Conteúdo: Paciente falando sobre experiência
- Local: Dentro da clínica ou ambiente neutro
```

#### Opção 3: Screenshot WhatsApp (Futuro)
```
Implementação:
- Print de mensagens de agradecimento
- Remover número/info pessoal
- Apenas mensagem e "check duplo azul"
- Timestamp opcional
- Usar com autorização explícita
```

### Diretrizes de Conteúdo

**Boas Citações:**
- ✅ Mencionam experiência pessoal ("Senti que...")
- ✅ Específicas sobre o resultado ("Ficou diferente porque...")
- ✅ Autênticas e com linguagem natural
- ✅ 150-250 caracteres idealmente

**Evitar:**
- ❌ Citações genéricas ("Adorei!")
- ❌ Linguagem muito comercial
- ❌ Promessas exageradas
- ❌ Comparações com concorrentes

### Estratégia de Coleta

1. **Durante atendimento**: Perguntar de forma natural se paciente está satisfeita
2. **Após tratamento**: Enviar formulário simples (nome, procedimento, como foi a experiência)
3. **Via WhatsApp**: Quando paciente elogia, pedir permissão para usar depoimento
4. **Incentivo**: Oferecer resultado mensal com os melhores depoimentos

---

## 3. AMBIENTE DA CLÍNICA

### Objetivo
Humanizar a marca e reduzir ansiedade do primeiro contato criando familiaridade.

### Implementação Atual
- Componente: `ClinicEnvironmentGallery` em `components/site/sections.tsx`
- Layout: Masonry/Grid 2x2 com card destacado (featured)
- Imagens placeholder em: `/public/images/clinic/`

### Espaços a Fotografar

#### 1. Recepção (Featured: Não)
```
O que fotografar:
- Entrada da clínica
- Área de espera com mobiliário
- Detalhe: flor fresca, revista, café
- Iluminação natural/ambiente

Técnica:
- Ângulo aberto (35-50mm)
- Altura dos olhos
- Luz natural por trás do fotografo
- Sem pessoas visíveis (ou muito discreta)
```

#### 2. Sala de Atendimento (Featured: SIM)
```
O que fotografar:
- Vista geral da sala
- Maca/cadeira de atendimento
- Equipamentos bem organizados
- Iluminação ambiente

Técnica:
- Foto principal em grande destaque
- Enquadramento que mostre amplitude
- Profundidade de campo para mostrar detalhes
- Sem paciente visível
```

#### 3. Equipamentos (Featured: Não)
```
O que fotografar:
- Laser/aparelho principal
- Detalhe de controle/visor
- Ambiente onde fica armazenado

Técnica:
- Enquadramento profissional
- Foco no equipamento
- Mostrar condição de manutenção
- Ambiente limpo ao fundo
```

#### 4. Detalhes/Detalles (Featured: Não)
```
O que fotografar:
- Toalhas dobradas
- Produtos skincare organizados
- Amenities (velas, plantas)
- Detalhe de decoração

Técnica:
- Macro/close-up
- Foco seletivo
- Iluminação suave
- Profundidade
```

### Especificações Técnicas

| Item | Especificação |
|------|----------------|
| **Resolução** | 2000x1500px (paisagem) ou 1500x2000px (retrato) |
| **Formato** | JPG 80% qualidade ou WebP |
| **Iluminação** | Luz natural 5000-5600K (evitar fluorescente) |
| **Tempo** | Manhã (06h-09h) ou final de tarde (15h-17h) |
| **Equipamento** | Smartphone premium ou câmera DSLR |
| **Edição** | Ajuste de contraste, branco e desfoque — SEM filtros |

### Cronograma de Fotografia

```
Mês 1: Fotos de recepção e ambiente geral
Mês 2: Sala de atendimento e equipamentos
Mês 3: Detalhes e close-ups
Mês 4-12: Atualizar conforme necessário (sazonalmente)
```

---

## 4. FOTOGRAFIA DA PROFISSIONAL (LUANA CARLA)

### Objetivo
Humanizar a marca e criar conexão pessoal com a profissional.

### Retratos Recomendados

#### 1. Foto Profissional Principal
```
Uso: Página "Sobre" e footer
Estilo: Retrato corporativo
- Altura: Meio corpo
- Expressão: Sorriso natural, confiante
- Vestuário: Jaleco branco ou roupa elegante
- Fundo: Neutro (branco ou cinza)
- Resolução: 1600x2000px
```

#### 2. Foto em Ação
```
Uso: Homepage, galeria de ambiente
Estilo: Fotojornalismo
- Altura: Altura dos olhos
- Atividade: Organizando materiais, mostrando equipamento
- Iluminação: Natural
- Ambiente: Dentro da clínica
- Expressão: Concentrada, profissional
- Resolução: 2000x1500px
```

#### 3. Foto Casual
```
Uso: Social media, stories
Estilo: Lifestyle
- Ambiente: Clínica (menos formal)
- Atividade: Chegando, tomando café, preparando espaço
- Expressão: Natural, sorridente
- Resolução: 1080x1080px (quadrado)
```

### Diretrizes Fotográficas

✅ **Fazer:**
- Fotos bem iluminadas (luz natural preferida)
- Postura aberta e acessível
- Contacto visual genuíno
- Ambiente profissional

❌ **Evitar:**
- Braços cruzados (postura defensiva)
- Fundo genérico de estúdio
- Expressão séria ou distante
- Muita edição/filtros

---

## 5. INTEGRAÇÃO NA HOMEPAGE

### Fluxo Visual Recomendado

```
1. HERO (Existente)
   └── Imagem grande impactante da clínica/profissional
       Objetivo: Primeira impressão

2. TRUST STRIP (Existente)
   └── 3 ícones/números sobre credibilidade

3. MANIFESTO BAND (Existente)
   └── Proposta da clínica em texto

4. SIGNATURE GALLERY (Existente)
   └── Galeria visual de procedimentos

5. RESULTADOS (Novo)
   └── ResultsGallery - Antes/Depois
       6 casos (2 por procedimento)
       Grid 3 colunas

6. DEPOIMENTOS (Novo)
   └── TestimonialsSection - 6 depoimentos
       Grid 3 colunas com foto/nome/quote
       Prova social e engajamento

7. AMBIENTE (Novo)
   └── ClinicEnvironmentGallery - 4 espaços
       Grid com destaque para sala de atendimento
       Humanização e familiaridade

8. ARTIGOS/PROCESSO (Existente)
   └── TripleArticleSection - 3 situações

9. PROCESSO (Existente)
   └── ProcessSection - 4 passos

10. SERVIÇOS (Existente)
    └── ServiceRailsSection - 3 linhas

[...continua com resto do site...]
```

---

## 6. OTIMIZAÇÃO DE IMAGENS

### Compressão e Performance

```
Ferramenta recomendada: TinyPNG / ImageOptim

Antes/Depois:
- Resolução: 2000px → 1200px (web)
- Qualidade: 100% JPG → 80% JPG
- Tamanho: ~2.5MB → ~250KB
- Formato: JPG/WebP com fallback
```

### Lazy Loading (Implementado)
```
Imagens abaixo do fold carregam sob demanda
Melhora performance inicial da página
Implementado via Next.js Image component
```

### Alt Text (Implementação)
```
Padrão para antes/depois:
alt="Resultado de pós-operatório: evolução de 7 para 30 dias após procedimento"

Padrão para ambiente:
alt="Sala de atendimento da Luana Carla Dermo Clinic com equipamentos profissionais"

Padrão para depoimentos:
alt="Foto de perfil de [Nome] - paciente da clínica"
```

---

## 7. CALENDÁRIO DE IMPLEMENTAÇÃO

### Fase 1 (Semanas 1-2)
- [x] Criar componentes (ResultsGallery, TestimonialsSection, ClinicEnvironmentGallery)
- [x] Gerar placeholders visuais
- [x] Integrar na homepage
- [ ] Fotografia real: Ambiente clínico

### Fase 2 (Semanas 3-4)
- [ ] Fotografia real: Resultados antes/depois (3 casos)
- [ ] Coleta de depoimentos reais
- [ ] Fotografia profissional: Luana Carla

### Fase 3 (Mês 2)
- [ ] Substituir placeholders por fotos reais
- [ ] Expandir galeria de resultados para 6-9 casos
- [ ] Implementar vídeos de depoimentos (opcional)

### Fase 4 (Contínuo)
- [ ] Atualizar galeria mensalmente
- [ ] Adicionar novos depoimentos
- [ ] Rotacionar fotos seasonalmente
- [ ] A/B testar efetividade visual

---

## 8. RECOMENDAÇÕES FINAIS

### Copyrighting + Visualidade
Combine conteúdo visual com texto descritivo:
```
Em vez de apenas antes/depois:

❌ Resultado
✅ "Pós-operatório assistido: recuperação de 7 para 30 dias
   Acompanhamento profissional desde o primeiro dia"
```

### Atualização Frequente
- Toque visualmente novo a cada 4-6 semanas
- Galleria deve crescer com pacientes satisfeitos
- Depoimentos devem ser diversos (idade, procedimento)

### Confiança → Conversão
Lembre-se: Boa fotografia não só impressiona — ela converte.
Cada imagem deve responder uma pergunta do visitante:
- "Como é o resultado real?" (Antes/Depois)
- "Vale realmente a pena?" (Depoimentos)
- "É um lugar profissional?" (Ambiente)

---

## Contato para Dúvidas
Para questões sobre implementação técnica, consultar arquivo `components/site/sections.tsx`.

**Última atualização:** Abril 2026
