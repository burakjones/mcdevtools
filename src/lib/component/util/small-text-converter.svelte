<script>
    import {toast} from "@zerodevx/svelte-toast";
    import {incrementTracker} from "$lib/tracker/tracker";

    let inputText = '';

    $: convertedText = convertToSmallText(inputText);

    function convertToSmallText(text) {
        const normalAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZĞŞÇÜİÖĄĆĘŁŃÓŚŹŻ';
        const smallTextAlphabet = 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀѕᴛᴜᴠᴡxʏᴢğşçüiöᴀᴄ́ᴌśᴏ́ᴢ̇ᴢ́';

        const uppercaseText = text.toUpperCase();
        let convertedText = '';

        for (let i = 0; i < uppercaseText.length; i++) {
            const char = uppercaseText[i];
            const index = normalAlphabet.indexOf(char);

            if (index !== -1) {
                convertedText += smallTextAlphabet[index];
            } else {
                convertedText += char;
            }
        }

        return convertedText;
    }

    function copyValue() {
        navigator.clipboard.writeText(convertedText)
        copyToast()
    }

    function copyToast() {
        toast.push('Başarılı bir şekilde kopyalandı!', {
            theme: {
                '--toastColor': 'mintcream',
                '--toastBackground': 'rgba(72,187,120,0.9)',
                '--toastBarBackground': '#2F855A'
            }
        })

        incrementTracker("small-text-copied")
    }
</script>

<main class="w-[60%] grid grid-cols-1 md:grid-cols-2 gap-10 text-center text-white">
    <div class="flex flex-col gap-3">
        <h3 class="font-medium text-white text-[20px]">Metin Giriniz</h3>
        <textarea class="w-full text-lg text-gray-400 font-mono rounded-md p-2 bg-[#141517] resize-none h-auto min-h-[400px] leading-6" bind:value={inputText} on:input />
    </div>
    <div class="flex flex-col gap-3">
        <h3 class="font-medium text-white text-[20px]" style="font-family: sans-serif">ᴋüçüᴋ ʏᴀᴢɪ</h3>
        <div class="relative">
            <textarea class="w-full text-lg text-gray-400 rounded-md p-2 bg-[#141517] resize-none h-auto min-h-[400px] leading-6" style="font-family: sans-serif" disabled on:copy={copyToast}>{convertedText}</textarea>
            <button class="text-sm px-4 py-1.5 absolute right-5 bottom-6 button bg-[#141517]" on:click={copyValue}>Kopyala</button>
        </div>
    </div>
</main>
