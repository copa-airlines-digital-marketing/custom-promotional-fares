<script>
	import { getTypography } from "$lib/components/foundations/typography";
	import Select from "../lib/components/Select.svelte";

import "../app.css";
</script>

<div class="container mx-auto py-8 ">
  <div class="grid grid-cols-3 !grid-rows-2 !pb-8">
      <label for="idForSelect" class={getTypography('body','body','xs:row-start-1 xs:row-end-1 xs:col-start-1 xs:col-end-3 sm:col-start-3 sm:col-end-3 sm:text-right md:col-start-3 md:col-end-3 self-end')}>Selecciona tu origen:</label>
 
      <select name="origin" id="idForSelect" data-filter-by="data-oac" class={getTypography('body','body','p-2 text-primary font-gilroy xs:row-start-2 xs:row-end-2 xs:col-start-1 xs:col-end-3 sm:col-start-3 sm:col-end-3 md:col-start-3 md:col-end-3 row-start-2 row-end-2 col-start-1 col-end-1 font-semibold border-b-primary border-b-2 focus-visible:border-none ')} >
        <option value="null">Todos los or&iacute;genes</option>
        <option value="PTY">Panamá</option>
      </select>
  </div>

    <ol class="grid 
    xs:grid-cols-1 
    md:!grid-cols-2 gap-2
    grid-flow-row auto-rows-fr 
    justify-items-center">
      <slot />


     </ol>

     <div class="text-center mx-auto flex justify-center pt-4">
        <button  id="atlantaholderpaginator" class={getTypography('body','body','min-w-[4.563rem] max-h-[5rem] flex items-center justify-center text-center outline-offset-4 outline-2 border active:outline focus:outline disabled:cursor-not-allowed disabled:outline-0 px-4 py-[0.625rem] rounded-[2.5rem] gap-1 text-d1 *:max-h-5 bg-primary text-common-white outline-primary border-primary hover:bg-primary-ultradark active:bg-primary focus:bg-primary-ultradark disabled:text-grey-500 disabled:bg-grey-100')} 
        
        >Ver
        M&aacute;s
        </button>
    </div>

      <p class={getTypography('body','body','text-grey-600 text-center pt-4')} >
        *Aplican restricciones, consulte nuestros 
        <a href="terminos-y-condiciones#destinoDelMes" target="_blank" rel="noopener"><span class={getTypography('body','body','text-primary hover:!underline')}>T&eacute;rminos y condiciones</span>
        </a>.</p>
</div>

