import { DirectiveBinding } from "vue";

// tooltip property directive
export const vTooltip = (el: HTMLElement, binding: DirectiveBinding) => {
    if (binding.value !== '') {
        el.outerHTML = `<div class="tooltip">
            <div class="tooltip-content">
                <span>${binding.value}</span>
            </div>
            ${el.outerHTML}
        </div>`
    }
};