<script lang="ts">
  import MultiSelect from "svelte-multiselect";
  import items from "$lib/items.json";

  let selectedPrimary: string[] = [];
  let selectedFades: string[] = [];
  let selectedExplosionShape: string;
  let selectedFlightPower: number;

  let isFlicker: boolean = false;
  let isTrail: boolean = false;

  let showResults = false;
  let activeCmd = false;
  let activeRecipe = false;

  let giveCmd = "";
  let summonCmd = "";
  let spigotCode = "";

  const positionValues = [
    { left: 60, top: 40 },
    { left: 100, top: 40 },
    { left: 138, top: 40 },
    { left: 60, top: 85 },
    { left: 100, top: 85 },
    { left: 138, top: 85 },
  ];

  function setGiveCommand() {
    let type: number = 0;
    let flicker = "";
    let trail = "";
    let primary: number[] = [];
    let fading: number[] = [];

    switch (selectedExplosionShape) {
      case "Large Ball": {
        type = 1;
        break;
      }
      case "Star": {
        type = 2;
        break;
      }
      case "Creeper": {
        type = 3;
        break;
      }
      case "Burst": {
        type = 4;
      }
    }

    if (isFlicker) {
      flicker = ",Flicker:1";
    } else if (isTrail) {
      trail = ",Trail:1";
    }

    for (let color of selectedPrimary) {
      const dyeInfo = dyes.find((dye) => dye.color === color);
      if (dyeInfo) {
        primary.push(dyeInfo.deci);
      }
    }

    for (let color of selectedFades) {
      const dyeInfo = dyes.find((dye) => dye.color === color);
      if (dyeInfo) {
        fading.push(dyeInfo.deci);
      }
    }

    giveCmd = `/give @s firework_rocket{Fireworks:{Flight:${selectedFlightPower},Explosions:[{Type:${type}${flicker}${trail},Colors:[I;${primary.join(
            ","
    )}]${fading.length > 0 ? `,FadeColors:[I;${fading.join(",")}]` : ""}}]}} 1`;
  }

  function setSummonCommand() {
    let type: number = 0;
    let flicker = "";
    let trail = "";
    let primary: number[] = [];
    let fading: number[] = [];

    switch (selectedExplosionShape) {
      case "Large Ball": {
        type = 1;
        break;
      }
      case "Star": {
        type = 2;
        break;
      }
      case "Creeper": {
        type = 3;
        break;
      }
      case "Burst": {
        type = 4;
      }
    }

    if (isFlicker) {
      flicker = ",Flicker:1";
    } else if (isTrail) {
      trail = ",Trail:1";
    }

    for (let color of selectedPrimary) {
      const dyeInfo = dyes.find((dye) => dye.color === color);
      if (dyeInfo) {
        primary.push(dyeInfo.deci);
      }
    }

    for (let color of selectedFades) {
      const dyeInfo = dyes.find((dye) => dye.color === color);
      if (dyeInfo) {
        fading.push(dyeInfo.deci);
      }
    }

    summonCmd = `/summon firework_rocket ~ ~ ~ {FireworksItem:{id:firework_rocket,Count:1,tag:{Fireworks:{Flight:${selectedFlightPower},Explosions:[{Type:${type}${flicker}${trail},Colors:[I;${primary.join(
            ","
    )}]${fading.length > 0 ? `,FadeColors:[I;${fading.join(",")}]` : ""}}]}}}}`;
  }

  function setSpigotCode() {
    let type: String = "";
    let flicker = "";
    let trail = "";
    let primary: String = "";
    let fading: String = "";

    switch (selectedExplosionShape) {
      case "Large Ball": {
        type = "BALL_LARGE";
        break;
      }
      case "Star": {
        type = "STAR";
        break;
      }
      case "Creeper": {
        type = "CREEPER";
        break;
      }
      case "Burst": {
        type = "BURST";
        break;
      }
      default: {
        type = "BALL";
      }
    }

    if (isFlicker) {
      flicker = ".withFlicker()";
    }
    if (isTrail) {
      trail = ".withTrail()";
    }

    for (let color of selectedPrimary) {
      primary += `.withColor(Color.fromRGB(${dyes.find((dye) => dye.color === color).rgb}))`;
    }

    for (let color of selectedFades) {
      fading += `.withFade(Color.fromRGB(${dyes.find((dye) => dye.color === color).rgb}))`;
    }

    spigotCode = `ItemStack firework = new ItemStack(Material.FIREWORK_ROCKET);
FireworkMeta meta = (FireworkMeta) firework.getItemMeta();
meta.addEffect(FireworkEffect.builder()${primary}.with(FireworkEffect.Type.${type})${flicker}${trail}${fading}.build());
meta.setPower(${selectedFlightPower});
firework.setItemMeta(meta);`;
  }

  import { toast } from "@zerodevx/svelte-toast";
  import {incrementTracker} from "$lib/tracker/tracker";

  function copyValue(text: string) {
    navigator.clipboard.writeText(text);
    toast.push("Başarılı bir şekilde kopyalandı!", {
      theme: {
        "--toastColor": "mintcream",
        "--toastBackground": "rgba(72,187,120,0.9)",
        "--toastBarBackground": "#2F855A",
      },
    });

    incrementTracker("fireworks-served")
  }

  function selectShape(shape: string) {
    selectedExplosionShape = shape;
  }

  function selectEffect(effect: string) {
    if (effect === "Flicker") {
      isFlicker = !isFlicker;
    } else {
      isTrail = !isTrail;
    }
  }

  function selectPower(power: string) {
    switch (power) {
      case "Low": {
        selectedFlightPower = 1;
        break;
      }
      case "Medium": {
        selectedFlightPower = 2;
        break;
      }
      case "High": {
        selectedFlightPower = 3;
      }
    }
  }

  function handleDone() {
    if (!selectedPrimary.length) {
      toast.push({
        msg: 'Lütfen en az 1 renk seçiniz!',
        theme: {
          '--toastBackground': '#F56565',
          '--toastBarBackground': '#C53030'
        }
      })
      return;
    }
    if (!selectedFlightPower) {
      toast.push({
        msg: 'Lütfen uçuş süresini seçiniz!',
        theme: {
          '--toastBackground': '#F56565',
          '--toastBarBackground': '#C53030'
        }
      })
      return;
    }

    setGiveCommand();
    setSummonCommand();
    setSpigotCode();
    showResults = true;
    activeCmd = true;

    if (
            !(isTrail && isFlicker) &&
            !(selectedPrimary.length > 6) &&
            !(selectedFades.length > 6)
    ) {
      activeRecipe = true;
    }

    setTimeout(function() {
      const section = document.getElementById("generateScroll");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 200);
  }

  function getShapeIngredient(): string {
    let item = "";

    switch (selectedExplosionShape) {
      case "Large Ball": {
        item = "Fire Charge";
        break;
      }
      case "Star": {
        item = "Gold Nugget";
        break;
      }
      case "Creeper": {
        item = "Creeper Head";
        break;
      }
      case "Burst": {
        item = "Feather";
      }
    }
    return item;
  }

  const dyes = [
    {
      color: "Black Dye",
      deci: 1973019,
      rgb: "0, 0, 0"
    },
    {
      color: "Blue Dye",
      deci: 2437522,
      rgb: "0,0,255"
    },
    {
      color: "Brown Dye",
      deci: 5320730,
      rgb: "150, 75, 0"
    },
    {
      color: "Cyan Dye",
      deci: 2651799,
      rgb: "0, 100, 100"
    },
    {
      color: "Gray Dye",
      deci: 4408131,
      rgb: "128, 128, 128"
    },
    {
      color: "Green Dye",
      deci: 3887386,
      rgb: "0, 255, 0"
    },
    {
      color: "Light Blue Dye",
      deci: 6719955,
      rgb: "173, 216, 230"
    },
    {
      color: "Light Gray Dye",
      deci: 11250603,
      rgb: "211, 211, 211"
    },
    {
      color: "Lime Dye",
      deci: 4312372,
      rgb: "50, 205, 50"
    },
    {
      color: "Magenta Dye",
      deci: 12801229,
      rgb: "255, 0, 255"
    },
    {
      color: "Orange Dye",
      deci: 15435844,
      rgb: "255, 165, 0"
    },
    {
      color: "Pink Dye",
      deci: 14188952,
      rgb: "255, 192, 203"
    },
    {
      color: "Purple Dye",
      deci: 8073150,
      rgb: "128, 0, 128"
    },
    {
      color: "Red Dye",
      deci: 11743532,
      rgb: "255, 0, 0"
    },
    {
      color: "White Dye",
      deci: 15790320,
      rgb: "255, 255, 255"
    },
    {
      color: "Yellow Dye",
      deci: 14602026,
      rgb: "255, 255, 0"
    },
  ];

  const fireworkShape = [
    {
      shape: "Default",
      img: "default",
    },
    {
      shape: "Large Ball",
      img: "large-ball",
    },
    {
      shape: "Star",
      img: "star",
    },
    {
      shape: "Creeper",
      img: "creeper",
    },
    {
      shape: "Burst",
      img: "burst",
    },
  ];

  const fireworkEffect = [
    {
      name: "Flicker",
      img: "flicker",
    },
    {
      name: "Trail",
      img: "trail",
    },
  ];

  const powerValues = [
    {
      name: "Low",
      img: "flight-1",
      level: 1,
    },
    {
      name: "Medium",
      img: "flight-2",
      level: 2,
    },
    {
      name: "High",
      img: "flight-3",
      level: 3,
    },
  ];
</script>

<main class="w-[90%] lg:w-[60%] mt-5">
  <div class="space-y-9">
    <!-- Primary Colors Multiselect -->
    <div class="gap-10 justify-center flex md:flex-row flex-col ">
      <div class="flex justify-center">
        <div class="text-white font-semibold text-center rounded">
          <label for="Fading Colors">
            <p class="font-medium text-white text-20px text-left pb-2.5">Primary Colors</p>
          </label>
          <MultiSelect
                  outerDivClass="custom-multiselect"
                  id="Primary Colors"
                  options={dyes.map((dye) => dye.color)}
                  bind:selected={selectedPrimary}
                  placeholder="Firework Particles Colors"
                  --sms-options-bg="black"
                  --sms-min-height="30px"
                  --sms-width="300px"
                  --sms-padding="8px"
                  --sms-options-border-width="15px"
                  let:option
          >
            <img
                    src={items.find((item) => item.name === option).texture}
                    alt={option}
                    class="mg-flex w-[100%] lg:w-[40px] mr-2"
            />
            {option}
          </MultiSelect>
        </div>
      </div>

      <!-- Fading Colors Multiselect -->
      <div class="flex justify-center">
        <div class="text-white font-semibold text-center rounded">
          <label for="Fading Colors">
            <p class="font-medium text-white text-20px text-left pb-2.5">Fading Colors</p>
          </label>
          <MultiSelect
                  id="Fading Colors"
                  options={dyes.map((dye) => dye.color)}
                  bind:selected={selectedFades}
                  placeholder="Fading Particles Colors"
                  --sms-options-bg="black"
                  --sms-min-height="30px"
                  --sms-width="300px"
                  --sms-padding="8px"
                  let:option
          >
            <img
                    src={items.find((item) => item.name === option).texture}
                    alt={option}
                    class="mg-flex w-[100%] lg:w-[40px] mr-2"
            />
            {option}
          </MultiSelect>
        </div>
      </div>
    </div>

    <!-- Firework Shape Buttons -->
    <div>
      <p class="font-medium text-white text-20px text-center mb-3.5">Explosion Shape</p>
      <div class="w-[100%] flex flex-col">
        <div
                class="self-center grid grid-cols-2 md:grid-cols-5 2xl:grid-cols-5 gap-2"
        >
          {#each fireworkShape as shape}
            <button
                    class={`custom-button ${
              shape.shape === selectedExplosionShape ? "active" : ""
            }`}
                    on:click={() => selectShape(shape.shape)}
            >
              <img
                      src="/fireworks/{shape.img}.png"
                      alt={shape.shape}
                      class="w-full rounded-xl"
              />
              <p class="py-1.5 font-normal text-lg">{shape.shape}</p>
            </button>
          {/each}
        </div>
      </div>
    </div>

    <!-- Firework Effect Buttons -->
    <div>
      <p class="font-medium text-white text-20px text-center mb-3.5">Firework Effect</p>
      <div class="w-[100%] flex flex-col">
        <div
                class="self-center grid grid-cols-2 md:grid-cols-2 2xl:grid-cols-2 gap-2"
        >
          {#each fireworkEffect as effect}
            <button
                    class={`custom-button ${
              effect.name === "Flicker" && isFlicker ? "active" : ""
            }
                    ${effect.name === "Trail" && isTrail ? "active" : ""}`}
                    on:click={() => selectEffect(effect.name)}
            >
              <img
                      src="/fireworks/{effect.img}.png"
                      alt={effect.name}
                      class="w-[100%] lg:w-[120px] rounded-xl"
              />
              <p class="py-1.5 font-normal text-lg">{effect.name}</p>
            </button>
          {/each}
        </div>
      </div>
    </div>

    <!-- Flight Power Button -->
    <div>
      <p class="font-medium text-white text-20px text-center mb-3.5">Flight Duration</p>
      <div class="w-[100%] flex flex-col">
        <div
                class="self-center grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-3 gap-2"
        >
          {#each powerValues as power}
            <button
                    class={`custom-button ${
              power.level === selectedFlightPower ? "active" : ""
            }`}
                    on:click={() => selectPower(power.name)}
            >
              <img
                      src="/fireworks/{power.img}.png"
                      alt={power.name}
                      class="w-[100%] lg:w-[80px] rounded-xl"
              />
              <p class="py-1.5 font-normal text-lg">{power.name}</p>
            </button>
          {/each}
        </div>
      </div>
    </div>

    <div class="flex items-center flex-col">
      <button
              class="button h-fit"
              on:click={handleDone}
      >
        Generate
      </button>
    </div>
    <div id="generateScroll"></div>

    {#if showResults}
      {#if activeCmd}
        <div class="w-full min-w-[10px] flex-1">
          <div class="flex flex-col">
            <h3 class="font-medium text-white text-20px text-left">
              Firework Give Command
            </h3>
            <div class="flex gap-3 mt-2">
              <input
                      disabled
                      bind:value={giveCmd}
                      class="inline-block text-sm text-gray-400 font-mono rounded-md p-2 bg-[#141517] h-[35px] w-[100%] max-w-[100%]"
              />
              <button
                      on:click={() => copyValue(giveCmd)}
                      class="w-fit text-sm px-2 py-1.5 button h-fit inline-block"
              >Copy</button
              >
            </div>
          </div>
        </div>

        <div class="w-full min-w-[10px] flex-1">
          <div class="flex flex-col">
            <h3 class="font-medium text-white text-20px text-left">
              Firework Summon Command
            </h3>
            <div class="flex gap-3 mt-2">
              <input
                      disabled
                      bind:value={summonCmd}
                      class="inline-block text-sm text-gray-400 font-mono rounded-md p-2 bg-[#141517] h-[35px] w-[100%] max-w-[100%]"
              />
              <button
                      on:click={() => copyValue(summonCmd)}
                      class="w-fit text-sm px-2 py-1.5 button h-fit inline-block"
              >Copy</button
              >
            </div>
          </div>
        </div>

        <div class="w-full min-w-[10px] flex-1">
          <div class="flex flex-col mt-6">
            <h3 class="font-medium text-white text-20px text-left">Spigot API Code</h3>
            <div class="flex gap-3 mt-2">
              <textarea style="resize: none;" disabled bind:value={spigotCode} class=" inline-block text-sm text-gray-400 font-mono rounded-md p-2 bg-[#141517] h-[105px] w-[100%] max-w-[100%] overflow-y-scroll"></textarea>
              <button on:click={() => copyValue(spigotCode)} class="w-fit text-sm px-2 py-1.5 button h-fit inline-block">Copy</button>
            </div>
          </div>
        </div>
      {/if}
      <h3 class="flex justify-center font-medium text-white text-[40px]">
        Crafting Recipe
      </h3>
      <h2 class="flex justify-center font-medium text-white text-[20px]">
        Step 1: Firework Star
      </h2>

      {#if activeRecipe}
        <div class="grid grid-cols-1 xl:flex xl:flex-wrap w-full gap-12">
          <div class="relative w-[370px] h-[170px] mx-auto">
            <img
                    src="/fireworks/crafting-table.png"
                    alt="crafting table"
                    class="w-[370px] h-[170px] absolute"
            />
            <img
                    src={items.find((item) => item.name === "Firework Star").texture}
                    alt="firework star"
                    class="absolute w-[33px] h-[35px] right-[76px] top-[85px]"
            />
            <img
                    src={items.find((item) => item.name === "Gunpowder").texture}
                    alt="Gunpowder"
                    class="absolute w-[33px] h-[35px] left-[60px] top-[128px]"
            />
            {#if selectedExplosionShape != null}
              <img
                      src={items.find((item) => item.name === getShapeIngredient())
                  .texture}
                      alt={getShapeIngredient()}
                      class="absolute w-[33px] h-[35px] left-[100px] top-[128px]"
              />
            {/if}

            {#if isFlicker}
              <img
                      src={items.find((item) => item.name === "Glowstone Dust")
                  .texture}
                      alt="Glowstone Dust"
                      class="absolute w-[33px] h-[35px] left-[138px] top-[128px]"
              />
            {/if}

            {#if isTrail}
              <img
                      src={items.find((item) => item.name === "Diamond").texture}
                      alt="Diamond"
                      class="absolute w-[33px] h-[35px] left-[138px] top-[128px]"
              />
            {/if}
            {#each selectedPrimary as color, index}
              <img
                      src={items.find((item) => item.name === color).texture}
                      alt={color}
                      class={`w-[33px] h-[35px] left-[${positionValues[index].left}px] top-[${positionValues[index].top}px] absolute`}
              />
            {/each}
          </div>
        </div>

        {#if selectedFades.length}
          <h2 class="flex justify-center font-medium text-white text-[20px]">
            Step 2: Fading colors
          </h2>
          <div class="relative w-[370px] h-[170px] mx-auto">
            <img
                    src="/fireworks/crafting-table.png"
                    alt="crafting table"
                    class="w-[370px] h-[170px] absolute"
            />
            <img
                    src={items.find((item) => item.name === "Firework Star").texture}
                    alt="firework star"
                    class="absolute w-[33px] h-[35px] right-[76px] top-[85px]"
            />
            <img
                    src={items.find((item) => item.name === "Firework Star").texture}
                    alt="firework star"
                    class="absolute w-[33px] h-[35px] left-[60px] top-[128px]"
            />
            {#each selectedFades as color, index}
              <img
                      src={items.find((item) => item.name === color).texture}
                      alt={color}
                      class={`w-[33px] h-[35px] left-[${positionValues[index].left}px] top-[${positionValues[index].top}px] absolute`}
              />
            {/each}
          </div>
        {/if}

        <h2 class="flex justify-center font-medium text-white text-[20px]">
          Step {!selectedFades.length ? 2 : 3}: Crafting the Rocket
        </h2>
        <div class="relative w-[370px] h-[170px] mx-auto">
          <img
                  src="/fireworks/crafting-table.png"
                  alt="crafting table"
                  class="w-[370px] h-[170px] absolute"
          />
          <img
                  src={items.find((item) => item.name === "Firework Star").texture}
                  alt="firework star"
                  class="absolute w-[33px] h-[35px] left-[60px] top-[85px]"
          />
          <img
                  src={items.find((item) => item.name === "Paper").texture}
                  alt="Paper"
                  class="absolute w-[33px] h-[35px] left-[100px] top-[85px]"
          />
          <img
                  src={items.find((item) => item.name === "Gunpowder").texture}
                  alt="gunpowder"
                  class="absolute w-[33px] h-[35px] left-[138px] top-[85px]"
          />
          <img
                  src={items.find((item) => item.name === "Firework Rocket").texture}
                  alt="Firework Rocket"
                  class="absolute w-[33px] h-[35px] right-[76px] top-[85px]"
          />

          {#if selectedFlightPower > 1}
            <img
                    src={items.find((item) => item.name === "Gunpowder").texture}
                    alt="gunpowder"
                    class="absolute w-[33px] h-[35px] left-[138px] top-[40px]"
            />
          {/if}

          {#if selectedFlightPower === 3}
            <img
                    src={items.find((item) => item.name === "Gunpowder").texture}
                    alt="gunpowder"
                    class="absolute w-[33px] h-[35px] left-[138px] top-[128px]"
            />
          {/if}
        </div>
      {:else}
        <div
                class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-5"
                role="alert"
        >
          <strong class="font-bold">No crafting recipe available.</strong>
          <span class="block sm:inline"
          >Confirm that you have up to 6 primary colors, fewer than 7 fading
            colors, and less than 2 effects to view the vanilla recipe.</span
          >
        </div>
      {/if}
    {/if}
  </div>
</main>

<style>
  .custom-button {
    @apply text-white font-bold items-center p-1 border-2 border-[#626875] rounded-xl transition duration-100 ;
  }

  .custom-button.active {
    @apply transition duration-100 bg-[#3C414B] border-[#3C414B];
  }

  :global(body) {
    --sms-border: 1px solid #626875;
  }

  img {
    image-rendering: pixelated;
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;
  }
</style>
