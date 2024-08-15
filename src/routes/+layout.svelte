<script>
  import "../app.css";
  
</script>


<div class="container mx-auto !py-32">
  <div class="!mb-8 grid grid-cols-3 !grid-rows-2">
    <label for="promocardholderoriginselect" class=" xs:row-start-1 xs:row-end-1 xs:col-start-1 xs:col-end-3 md:col-start-3 md:col-end-3  row-start-1 row-end-1 col-start-1 col-end-1 self-end font-gilroy font-semibold text-grey-600">Selecciona tu origen:</label>
      <select name="origin" id="promocardholderoriginselect" data-filter-by="data-oac" class=" !p-3 text-primary font-gilroy
        xs:row-start-2 xs:row-end-2 
        xs:col-start-1 xs:col-end-3
        row-start-2 row-end-2 col-start-1 col-end-1 md:col-start-3 md:col-end-3  border-b font-semibold ">
          <option value="null">Todos los or&iacute;genes</option>
          <option value="PTY">Panamá</option>
          <option value="MIA">Miami</option>
          <option value="GYE">Guayaquil</option>
          <option value="UIO">Quito</option>
      </select>
  </div>
      <ol class="grid grid-cols-1 md:!grid-cols-2 gap-12 sm:!gap-6 lg:!gap-4 lg:!justify-items-center grid-flow-row auto-rows-fr ">
     <slot />
     </ol>

     <ol class="grid grid-cols-1 md:!grid-cols-1 gap-12 sm:!gap-6 lg:!gap-4 lg:!justify-items-center grid-flow-row auto-rows-fr ">
      <slot />
      </ol>

     <div class="!text-center !pt-4  mb-4 mx-auto flex justify-center"><button
      class="font-suisse font-medium min-w-[4.563rem] max-h-[5rem] flex items-center justify-center text-center outline-offset-4 outline-2 border active:outline focus:outline disabled:cursor-not-allowed disabled:outline-0 px-4 py-[0.625rem] rounded-[2.5rem] gap-1 text-d1 *:max-h-5 bg-primary text-common-white outline-primary border-primary hover:bg-primary-ultradark active:bg-primary focus:bg-primary-ultradark disabled:text-grey-500 disabled:bg-grey-100" id="atlantaholderpaginator ">Ver
      M&aacute;s</button>

      <button
      class="hidden font-suisse font-medium min-w-[4.563rem] max-h-[5rem]  items-center justify-center text-center outline-offset-4 outline-2 border active:outline focus:outline disabled:cursor-not-allowed disabled:outline-0 px-4 py-[0.625rem] rounded-[2.5rem] gap-1 text-d1 *:max-h-5 bg-primary text-common-white outline-primary border-primary hover:bg-primary-ultradark active:bg-primary focus:bg-primary-ultradark disabled:text-grey-500 disabled:bg-grey-100" id="atlantaholderpaginator ">Ver
      M&aacute;s</button>
    </div>

      <p class="!font-body-normal !text-grey-600 !font-sans !text-14/20 !text-center !pt-4">*Aplican restricciones, consulte nuestros <a
      href="terminos-y-condiciones#destinoDelMes" target="_blank" rel="noopener"><span class=" !text-primary hover:!underline" >T&eacute;rminos y
          condiciones</span></a>.</p>
</div>

