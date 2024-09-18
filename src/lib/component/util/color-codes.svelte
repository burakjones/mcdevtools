<script lang="ts">
const colors = [
    {
        "name": "Siyah",
        "hex": "#000000",
        "code": "§0",
        "tag": "<black>",
        "motd": "\\u00A70"
    },
    {
        "name": "Koyu Mavi",
        "hex": "#0000AA",
        "code": "§1",
        "tag": "<dark_blue>",
        "motd": "\\u00A71"
    },
    {
        "name": "Koyu Yeşil",
        "hex": "#00AA00",
        "code": "§2",
        "tag": "<dark_green>",
        "motd": "\\u00A72"
    },
    {
        "name": "Koyu Aqua",
        "hex": "#00AAAA",
        "code": "§3",
        "tag": "<dark_aqua>",
        "motd": "\\u00A73"
    },
    {
        "name": "Koyu Kırmızı",
        "hex": "#AA0000",
        "code": "§4",
        "tag": "<dark_red>",
        "motd": "\\u00A74"
    },
    {
        "name": "Koyu Mor",
        "hex": "#AA00AA",
        "code": "§5",
        "tag": "<dark_purple>",
        "motd": "\\u00A75"
    },
    {
        "name": "Altın",
        "hex": "#FFAA00",
        "code": "§6",
        "tag": "<gold>",
        "motd": "\\u00A76"
    },
    {
        "name": "Gri",
        "hex": "#AAAAAA",
        "code": "§7",
        "tag": "<gray>",
        "motd": "\\u00A77"
    },
    {
        "name": "Koyu Gri",
        "hex": "#555555",
        "code": "§8",
        "tag": "<dark_gray>",
        "motd": "\\u00A78"
    },
    {
        "name": "Mavi",
        "hex": "#5555FF",
        "code": "§9",
        "tag": "<blue>",
        "motd": "\\u00A79"
    },
    {
        "name": "Yeşil",
        "hex": "#55FF55",
        "code": "§a",
        "tag": "<green>",
        "motd": "\\u00A7a"
    },
    {
        "name": "Aqua",
        "hex": "#55FFFF",
        "code": "§b",
        "tag": "<aqua>",
        "motd": "\\u00A7b"
    },
    {
        "name": "Kırmızı",
        "hex": "#FF5555",
        "code": "§c",
        "tag": "<red>",
        "motd": "\\u00A7c"
    },
    {
        "name": "Açık Mor",
        "hex": "#FF55FF",
        "code": "§d",
        "tag": "<light_purple>",
        "motd": "\\u00A7d"
    },
    {
        "name": "Sarı",
        "hex": "#FFFF55",
        "code": "§e",
        "tag": "<yellow>",
        "motd": "\\u00A7e"
    },
    {
        "name": "Beyaz",
        "hex": "#FFFFFF",
        "code": "§f",
        "tag": "<white>",
        "motd": "\\u00A7f"
    }
    ]


    const formats = [
    {
        "effect": "<span class='font-bold'>MC Dev Tools</span>",
        "name": "Kalın",
        "code": "§l",
        "tag": "<bold>",
        "motd": "\\u00A7l"
    },
    {
        "effect": "<span class='underline'>MC Dev Tools</span>",
        "name": "Altı Çizili",
        "code": "§n",
        "tag": "<underline>",
        "motd": "\\u00A7n"
    },
    {
        "effect": "<span class='italic'>MC Dev Tools</span>",
        "name": "İtalik",
        "code": "§o",
        "tag": "<italic>",
        "motd": "\\u00A7o"
    },
    {
        "effect": "<span class='line-through'>MC Dev Tools</span>",
        "name": "Üstü Çizili",
        "code": "§m",
        "tag": "<strikethrough>",
        "motd": "\\u00A7m"
    },
    {
        "effect": "",
        "name": "Magic",
        "code": "§k",
        "tag": "<magic>",
        "motd": "\\u00A7k"
    },
    {
        "effect": "MC Dev Tools",
        "name": "Sıfırla",
        "code": "§r",
        "tag": "<reset>",
        "motd": "\\u00A7r"
    }
]

    let obfuscated = "MCDevTools"

    function getRandomLetter() {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        return alphabet[randomIndex];
    }

    function obfuscateString() {
        let newString = "";
        for (let i = 0; i < obfuscated.length; i++) {
            const char = obfuscated[i];
            if (char !== " ") {
                newString += getRandomLetter();
            } else {
                newString += " ";
            }
        }
        obfuscated = newString;
    }

    setInterval(obfuscateString, 80);
</script>

<table class="w-[90%] lg:w-[60%] text-white">
    <tr class="text-[#9d9d9e] font-medium">
        <td class="p-2 pr-4 border-b-[1.5px] border-b-[#232324]">Görünüş</td>
        <td class="pr-4 border-b-[1.5px] border-b-[#232324]">İsim</td>
        <td class="text-left pr-4 border-b-[1.5px] border-b-[#232324]">Sohbet Kodu</td>
        <td class="text-left pr-4 w-[24%] border-b-[1.5px] border-b-[#232324]">Mini Mesaj Etiketi</td>
        <td class="text-left pr-3 w-[15%] border-b-[1.5px] border-b-[#232324]">MOTD</td>
        <td class="text-left pr-3 w-[15%] border-b-[1.5px] border-b-[#232324]">Hex</td>
    </tr>
    {#each colors as color}
        <tr class="">
            <td class="p-1.5 pr-5 border-b-2 border-b-[#1D1F24] text-gray-400">
                <div class="bg-[{color.hex}] rounded-md w-[90px] h-[25px]"></div>
            </td>
            <td class="border-b-2 border-b-[#1D1F24] text-gray-400 pr-2">{color.name}</td>
            <td class="border-b-2 border-b-[#1D1F24] text-gray-400">{color.code}</td>
            <td class="border-b-2 border-b-[#1D1F24] text-gray-400">{color.tag}</td>
            <td class="border-b-2 border-b-[#1D1F24] text-gray-400">{color.motd}</td>
            <td class="border-b-2 border-b-[#1D1F24] text-gray-400">{color.hex}</td>
        </tr>
    {/each}

    {#each formats as format}
        <tr class="">
            <td class="border-b-2 border-b-[#1D1F24] text-gray-400 p-1.5">
                {#if format.name === "Magic"}
                    {@html obfuscated}
                {:else}
                    {@html format.effect}
                {/if}
            </td>
            <td class="border-b-2 border-b-[#1D1F24] text-gray-400">{format.name}</td>
            <td class="border-b-2 border-b-[#1D1F24] text-gray-400">{format.code}</td>
            <td class="border-b-2 border-b-[#1D1F24] text-gray-400">{format.tag}</td>
            <td class="border-b-2 border-b-[#1D1F24] text-gray-400">{format.motd}</td>
            <td class="border-b-2 border-b-[#1D1F24] text-gray-400"></td>
        </tr>
    {/each}

</table>
