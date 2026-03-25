/**
 * Utilitário para interagir com o Chatwoot de forma robusta
 * Resolve o problema de race condition quando o widget ainda não carregou
 */

declare global {
  interface Window {
    $chatwoot?: {
      toggle: (state: "open" | "close") => void;
      setUser: (identifier: string, user: object) => void;
      setCustomAttributes: (attributes: object) => void;
      deleteCustomAttribute: (key: string) => void;
      setLocale: (locale: string) => void;
      reset: () => void;
    };
    chatwootSDK?: {
      run: (config: { websiteToken: string; baseUrl: string }) => void;
    };
  }
}

/**
 * Abre o widget do Chatwoot com retry automático
 * Se o widget ainda não carregou, tenta novamente por até 3 segundos
 */
export function openChatwoot(maxRetries = 10, retryDelay = 300): Promise<boolean> {
  return new Promise((resolve) => {
    let attempts = 0;
    
    const tryOpen = () => {
      attempts++;
      
      if (typeof window !== "undefined" && window.$chatwoot) {
        window.$chatwoot.toggle("open");
        resolve(true);
        return;
      }
      
      if (attempts < maxRetries) {
        setTimeout(tryOpen, retryDelay);
      } else {
        console.warn("[Chatwoot] Widget não carregou após tentativas");
        resolve(false);
      }
    };
    
    tryOpen();
  });
}

/**
 * Verifica se o Chatwoot está carregado
 */
export function isChatwootReady(): boolean {
  return typeof window !== "undefined" && !!window.$chatwoot;
}

/**
 * Fecha o widget do Chatwoot
 */
export function closeChatwoot(): void {
  if (typeof window !== "undefined" && window.$chatwoot) {
    window.$chatwoot.toggle("close");
  }
}

/**
 * Abre o chat com atributos customizados
 * Útil para rastrear origem/contexto do contato
 */
export async function openChatwootWithContext(
  context: string,
  attributes?: Record<string, string>
): Promise<boolean> {
  const opened = await openChatwoot();
  
  if (opened && window.$chatwoot) {
    // Define atributos customizados após abrir
    setTimeout(() => {
      if (window.$chatwoot && attributes) {
        window.$chatwoot.setCustomAttributes(attributes);
      }
    }, 500);
  }
  
  return opened;
}
