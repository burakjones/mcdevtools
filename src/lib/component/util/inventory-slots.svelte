<script lang="ts">
    let selectedType = "Chest (Large)"

    const inventories = [
        {
            name: "Örs",
            img: "anvil"
        },
        {
            name: "Fener",
            img: "beacon"
        },
        {
            name: "Yüksek Fırın",
            img: "blast-furnace"
        },
        {
            name: "İksir Standı",
            img: "brewing-stand"
        },
        {
            name: "Haritacılık Tablosu",
            img: "cartography-table"
        },
        {
            name: "Chest (Large)",
            img: "chest-large"
        },
        {
            name: "Chest (Small)",
            img: "chest-small"
        },
        {
            name: "Çalışma Masası",
            img: "crafting-table"
        },
        {
            name: "Dağıtıcı",
            img: "dispenser"
        },
        {
            name: "Eşşek",
            img: "donkey"
        },
        {
            name: "Fırlatıcı",
            img: "dropper"
        },
        {
            name: "Büyü Masası",
            img: "enchanting-table"
        },
        {
            name: "Fırın",
            img: "furnace"
        },
        {
            name: "Öğütme Taşı",
            img: "grindstone"
        },
        {
            name: "Huni",
            img: "hopper"
        },
        {
            name: "At",
            img: "horse"
        },
        {
            name: "Lama",
            img: "llama"
        },
        {
            name: "Dokuma Tezgahı",
            img: "loom"
        },
        {
            name: "Oyuncu",
            img: "player"
        },
        {
            name: "Shulker Kutusu",
            img: "shulker-box"
        },
        {
            name: "Demirci Masası",
            img: "smithing-table"
        },
        {
            name: "Smoker",
            img: "smoker"
        },
        {
            name: "Taş Kesici",
            img: "stonecutter"
        },
        {
            name: "Köylü",
            img: "villager"
        }
    ]
</script>

<main>
    <div class="place-items-center text-center flex-col gap-9 flex">
        <div class="flex flex-col">
            <h3 class="font-medium text-white text-[20px] text-left">Envanter Tipi</h3>
            <select bind:value={selectedType} id="type" class="w-[120px] scroll self-center">
                {#each inventories as inventory}
                    <option value="{inventory.name}" class="scroll-option">{inventory.name}</option>
                {/each}
            </select>
        </div>
        <img src="/inventory/{inventories.find(item => item.name == selectedType).img}.png" alt="Inventory Slots" class="w-[100%] lg:w-[450px] px-3">
    </div>
</main>
