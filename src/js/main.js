$(function () {
    // --- UTILITIES ---
    const safeToLowerCase = v => (typeof v === 'string' && v.length > 0 ? v.toLowerCase() : '');
    const numberToWord = n => numberToWordMap && numberToWordMap[n] ? numberToWordMap[n] : n;

    // General IconBox Generator (icon optional)
    function createIconBox(type, name, label, showIcon = true) {
        const strName = String(name);
        const key = strName.replace(/\s+/g, '_').toLowerCase();
        const $box = $('<span>', {
            class: `icon-box box-${type} bg-black flex text-white items-center rounded-md mb-1 w-max pr-2 mr-1 border border-black capitalize cursor-pointer`,
            [`data-${type}`]: key
        });
        if (showIcon) {
            $box.append($('<span>', { class: 'icon w-[31px] h-[31px] p-[7px]' })
                .append($('<img>', {
                    src: `/public/images/icons/${key}.png`,
                    alt: label
                }))
            );
        }
        $box.append(' ' + label);
        return $box;
    }

    // Section loader with icon toggle
    function loadIconSet(type, data, showIcon = true) {
        const $container = $(`#${type}_container`).empty();
        $.each(data, (_, obj) => {
            const val = (typeof obj === "object" && obj !== null && obj.name !== undefined) ? obj.name : obj;
            $container.append(createIconBox(type, val, val, showIcon));
        });
    }

    // --- TRAIT/CHARACTER HELPERS ---
    function getAllTraits(character) {
        const allTraits = new Set();
        (character.trait || []).forEach(trait => allTraits.add(trait));
        Object.values(character.skills || {}).forEach(skill =>
            (skill.trait || []).forEach(trait => allTraits.add(trait))
        );
        return [...allTraits].map(t => t.replace(/\s+/g, '_').toLowerCase()).join(' ');
    }

    function createTraitBadge(trait, buffs, debuffs, specials) {
        const traitKey = String(trait).replace(/\s+/g, '_');
        const found = buffs.find(b => b.name === trait)
            || debuffs.find(d => d.name === trait)
            || specials.find(s => s.name === trait);
        if (!found) return '';
        let type = found.type ? found.type.toLowerCase() : '', effect = found.effect || '';
        let icon = (type === 'special') ? '' : `<img src="/public/images/icons/${traitKey}.png">`;
        let info = `<span class="info-hover">${effect}</span>`;
        if (type === 'special')
            return `<div class="trait special-trait pl-2 pr-2 w-max h-[40px] p-[7px] text-sm rounded-md mr-3 mb-1 relative cursor-pointer"><span>${trait}</span><span class="z-40 inner rounded-md p-3 w-[250px] max-w-[230px] absolute top-[0px] left-[calc(100%+4px)] trait-special">${info}</span></div>`;
        return `<div class="trait text-sm w-[40px] h-[40px] p-[7px] rounded-md bg-black mr-3 mb-1 relative cursor-pointer">${icon}<span class="z-40 inner rounded-md p-3 w-[250px] max-w-[230px] absolute top-[0px] left-[calc(100%+4px)] trait-${type}"><span>${trait}</span>${info}</span></div>`;
    }

    // --- LOAD CHARACTERS ---
    function load_characters(characters, buffs, debuffs, specials) {
        const $container = $('#character_container').empty();
        const $count = $('#character_count');
        // Sort, unique by name
        let unique = [];
        let seen = {};
        characters.forEach(c => { if (!seen[c.name]) { unique.push(c); seen[c.name] = true; } });
        unique.sort((a, b) => a.name.localeCompare(b.name));
        $count.html(`Characters: ${unique.length} <span style='margin-left:10px'>Last updated: November 2024</span>`);
        unique.forEach(character => {
            const allTraits = getAllTraits(character);
            const boxClass = [
                safeToLowerCase(numberToWord(character.star)),
                character.role.replace(/\s+/g, '_').toLowerCase(),
                character.element.toLowerCase(),
                'char-box',
                allTraits,
                'bg-white',
                'mb-5',
                'mt-5',
                'rounded-md'
            ].join(' ');

            // Name bar
            const $name = $('<div>', { class: 'name flex p-5 border-b-[1px] items-center' })
                .append(`<img class='w-[40px] h-[40px] p-[7px] rounded-md bg-black mr-3' src="/public/images/icons/${character.role.replace(/\s+/g, '_').toLowerCase()}.png">`)
                .append(`<img class='w-[40px] h-[40px] p-[5px] rounded-md bg-black mr-3' src="/public/images/icons/${character.element.toLowerCase()}.png">`)
                .append(`<span class='content text-xl font-bold flex items-center h-[40px]'>${character.name}</span>`);

            // Skills
            const $skills = $('<div>', { class: 'skills p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-gray-700 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]' });
            Object.entries(character.skills).forEach(([k, skill]) => {
                const num = k.split('_')[1], traits = (skill.trait || []);
                const $skillBox = $('<div>', { class: `skill s${num} bg-white p-5 rounded-md h-fit rounded-bl-md` })
                    .append($('<span>', { class: 'skill-num text-sm text-gray-500' }).text(`Skill ${num}`))
                    .append($('<div>', { class: 'skill-name font-bold mb-3 text-lg' }).text(skill.name || 'Unnamed Skill'))
                    .append($('<span>', { class: 'skill-desc' }).html(skill.description || ''));
                // Traits badges
                if (traits.length > 0) {
                    const $traits = $('<div>', { class: 'mt-5 flex flex-wrap' });
                    traits.forEach(trait => $traits.append(createTraitBadge(trait, buffs, debuffs, specials)));
                    $skillBox.append($traits).append("<p class='bg-gray-700 p-1 rounded-md text-white mt-1'>☝️ Click or Hover</p>");
                }
                // Skill Enhance Table
                if (Array.isArray(skill.skill_enhance) && skill.skill_enhance.length > 0) {
                    const $enhance = $('<div>', { class: 'skill-enhance mt-2' });
                    $enhance.append(`<div class="font-semibold text-sm text-orange-500 mb-1">Skill Enhance</div>`);
                    skill.skill_enhance.forEach(enh => {
                        $enhance.append(
                            `<div class="flex gap-2 text-sm mb-1">
                    <span class="font-bold w-6 text-orange-500">${enh.name}</span>
                    <span class="w-10">${enh.value}</span>
                    <span class="text-gray-500">${enh.effect}</span>
                </div>`
                        );
                    });
                    $skillBox.append($enhance);
                }
                $skills.append($skillBox);
            });

            $('<div>', { class: boxClass })
                .append($name)
                .append($skills)
                .appendTo($container);
        });
        $container.append("<div class='absolute'></div>");
    }

    // --- FILTER & SELECTION ---
    const selected = { star: [], classes: [], element: [], buff: [], debuff: [], special: [] };

    function updateCharBoxes() {
        const keys = Object.keys(selected);
        const anyActive = keys.some(type => selected[type].length);
        let visibleCount = 0;
        $('.char-box').each(function () {
            const classList = this.className.split(/\s+/);
            let show = keys.every(type =>
                !selected[type].length || selected[type].some(val => classList.includes(val))
            );
            $(this)[show ? 'fadeIn' : 'fadeOut']();
            if (show) visibleCount++;
        });
        $('#character_count').text("Characters: " + visibleCount);
        if (!anyActive) $('.active').removeClass('active');
    }

    function handleSelection($el, arr, type) {
        const name = $el.data(type);
        if (!name) return;
        let idx = arr.indexOf(name);
        idx >= 0 ? arr.splice(idx, 1) : arr.push(name);
        $el.toggleClass('active');
        updateCharBoxes();
    }

    $(document).on('click', '.icon-box', function () {
        const $this = $(this);
        if ($this.hasClass('box-classes')) handleSelection($this, selected.classes, 'classes');
        else if ($this.hasClass('box-element')) handleSelection($this, selected.element, 'element');
        else if ($this.hasClass('box-buff')) handleSelection($this, selected.buff, 'buff');
        else if ($this.hasClass('box-debuff')) handleSelection($this, selected.debuff, 'debuff');
        else if ($this.hasClass('box-special')) handleSelection($this, selected.special, 'special');
        else if ($this.hasClass('box-star')) handleSelection($this, selected.star, 'star');
    });

    // --- SEARCH ---
    $('#character_search').on('keyup', function () {
        let searchValue = $(this).val().toLowerCase().trim();
        $(this).toggleClass("active", !!searchValue.length);
        if (!searchValue) return $('.char-box').show();
        let keys = searchValue.split(',').map(k => k.trim()).filter(Boolean);
        $('.char-box').each(function () {
            let txt = $(this).find('.name').text().toLowerCase();
            $(this).toggle(keys.some(k => txt.includes(k)));
        });
    });

    // --- FILTER PANEL TOGGLING ---
    $(document).on('click', '.filter, .close-button', function () {
        let $main = $('.left-main'), $btn = $(this), $txt = $btn.children('.text');
        if ($btn.hasClass('filter')) {
            $txt.text("Close");
            $main.addClass("left-main-show");
            $btn.removeClass('filter').addClass('close-button');
            $(".filter .tune").hide();
            $(".filter .close").show().addClass("flex");
        } else {
            $txt.text("More Filter");
            $main.removeClass("left-main-show");
            $btn.removeClass('close-button').addClass('filter');
            $(".filter .tune").show();
            $(".filter .close").removeClass("flex").hide();
        }
    });

    // --- INITIALIZE ---
    // NOTE: You must define star, classes, element, buffs, debuffs, specials, characters, numberToWordMap before including this script
    loadIconSet('star', star);
    loadIconSet('classes', classes);
    loadIconSet('element', element);
    loadIconSet('buff', buffs);
    loadIconSet('debuff', debuffs);
    loadIconSet('special', specials, false); // <--- Hide icon for special filter!
    load_characters(characters, buffs, debuffs, specials);
});
