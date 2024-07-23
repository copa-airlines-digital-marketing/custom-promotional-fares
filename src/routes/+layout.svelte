<script>
  import "../app.css";
  
</script>


<div class="container mx-auto !py-32">
  <div class="!mb-24 grid grid-cols-3 !grid-rows-2">
    <label for="promocardholderoriginselect" class=" xs:row-start-1 xs:row-end-1 xs:col-start-1 xs:col-end-3 row-start-1 row-end-1 col-start-1 col-end-1 self-end">Selecciona tu origen:</label>
      <select name="origin" id="promocardholderoriginselect" data-filter-by="data-oac" class=" !p-8 text-primary font-heading-bold
        xs:row-start-2 xs:row-end-2 
        xs:col-start-1 xs:col-end-3
        row-start-2 row-end-2 col-start-1 col-end-1 border-b">
          <option value="null">Todos los or&iacute;genes</option>
          <option value="PTY">Panamá</option>
          <option value="SDQ">Santo Domingo</option>
          <option value="GYE">Guayaquil</option>
          <option value="UIO">Quito</option>
      </select>
  </div>
      <ol class="grid grid-cols-1 md:!grid-cols-2 gap-12 lg:gap-16 lg:!justify-items-center grid-flow-row auto-rows-fr ">
     <slot />
     </ol>

     <div class="!text-center !pt-20 justify-content-center mb-4"><button
      class="button button--secondary button--secondary-outline d-none" id="atlantaholderpaginator">Ver
      M&aacute;s</button></div>
      <p class="!font-body-normal !text-grey-600 !font-sans !text-14/20 !text-center !pt-16">*Aplican restricciones, consulte nuestros <a
      href="terminos-y-condiciones#destinoDelMes" target="_blank" rel="noopener"><span class=" !text-primary hover:!underline" >T&eacute;rminos y
          condiciones</span></a>.</p>
</div>
