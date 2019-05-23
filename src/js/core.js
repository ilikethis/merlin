import { init as characters } from './modules/characters';
import { nun as template } from './common/nunjucks';

(function(window) {
  document.addEventListener('DOMContentLoaded', () => {
		characters();

		template.configure({ autoescape: true });

  });
})(window);
