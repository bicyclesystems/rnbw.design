const rnbwPreviewTemplate = `
<div class="row radius-s border" id="rnbw-preview-wrapper"
    style="flex-direction:row; flex-wrap:nowrap; min-height: 820px;">
    <div class="panel hidden-on-mobile justify-stretch border-right">
        <div class="panel">
            <div class="justify-stretch padding-s border-bottom">
                <div class="gap-s align-center">
                    <div class="radius-m icon-s align-center background-secondary"></div>
                    <span class="text-s opacity-m">/</span>
                    <div class="gap-s align-center radius-s">
                        <div class="radius-m icon-s align-center background-secondary"></div>
                        <span class="text-s">Project</span>
                    </div>
                </div>
            </div>
            <div class="border-bottom">
                <div class="justify-stretch padding-xs">
                    <div class="gap-s padding-xs">
                        <div class="icon-xs"></div>
                        <svg-icon src="https://raincons.rnbw.dev/icons/page.svg"></svg-icon>
                        <span class="text-s">Page</span>
                    </div>
                    <div class="row"></div>
                </div>
                <div class="justify-stretch padding-xs">
                    <div class="justify-start gap-s padding-xs" style="display: flex; align-items: center;">
                        <div class="icon-xs"></div>
                        <svg-icon src="https://raincons.rnbw.dev/icons/brush.svg"></svg-icon>
                        <span class="text-s">Stylesheet</span>
                        <div class="radius-s foreground-primary" style="
                            width: 6px;
                            height: 6px;
                            margin-bottom: -0.116vw;
                        "></div>
                    </div>
                </div>

                <div class="justify-stretch padding-xs">
                    <div class="gap-s padding-xs">
                        <div class="icon-xs"></div>
                        <svg-icon src="https://raincons.rnbw.dev/icons/code-js.svg"></svg-icon>
                        <span class="text-s">Script</span>
                    </div>
                    <div class="row"></div>
                </div>
                <div class="gap-s justify-start padding-s">
                    <div class="icon-xs"></div>
                    <svg-icon src="https://raincons.rnbw.dev/icons/component.svg"></svg-icon>
                    <span class="text-s">Component</span>
                </div>
                <div>
                    <div>
                        <div class="gap-s justify-start padding-s">
                            <svg-icon src="https://raincons.rnbw.dev/icons/down.svg"></svg-icon>
                            <svg-icon src="https://raincons.rnbw.dev/icons/folder.svg"></svg-icon>
                            <span class="text-s">Folder</span>
                        </div>
                    </div>
                    <div>
                        <div class="gap-s justify-start padding-s">
                            <div class="icon-xs"></div>
                            <div class="icon-xs"></div>
                            <svg-icon src="https://raincons.rnbw.dev/icons/brush.svg"></svg-icon>
                            <span class="text-s">Stylesheet</span>
                        </div>
                    </div>
                    <div>
                        <div class="gap-s justify-start padding-s">
                            <div class="icon-xs"></div>
                            <div class="icon-xs"></div>
                            <svg-icon src="https://raincons.rnbw.dev/icons/code-js.svg"></svg-icon>
                            <span class="text-s">Script</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="">
                <div class="justify-stretch padding-xs background-tertiary">
                    <div class="gap-s padding-xs">
                        <svg-icon src="https://raincons.rnbw.dev/icons/down.svg" id="heading3-dropdown-icon"
                            class="hidden"></svg-icon>
                        <svg-icon src="https://raincons.rnbw.dev/icons/heading.svg"></svg-icon>
                        <span class="text-s">Heading 3</span>
                    </div>
                </div>

                <div>
                    <div class="justify-stretch padding-xs background-secondary" id="span1" style="opacity:0;">
                        <div class="gap-s padding-xs">
                            <div class="icon-xs"></div>
                            <div class="icon-xs"></div>
                            <svg-icon src="https://raincons.rnbw.dev/icons/div.svg"></svg-icon>
                            <span class="text-s">Span</span>
                        </div>
                    </div>
                    <div class="justify-stretch padding-xs background-secondary" id="span2" style="opacity:0;">
                        <div class="gap-s padding-xs">
                            <div class="icon-xs"></div>
                            <div class="icon-xs"></div>
                            <svg-icon src="https://raincons.rnbw.dev/icons/div.svg"></svg-icon>
                            <span class="text-s">Span</span>
                        </div>
                    </div>

                    <div class="justify-stretch padding-xs background-secondary" id="span3" style="opacity:0;">
                        <div class="gap-s padding-xs">
                            <div class="icon-xs"></div>
                            <div class="icon-xs"></div>
                            <svg-icon src="https://raincons.rnbw.dev/icons/div.svg"></svg-icon>
                            <span class="text-s">Span</span>
                        </div>
                    </div>

                    <div class="justify-stretch padding-xs background-secondary" id="span4" style="opacity:0;">
                        <div class="gap-s padding-xs">
                            <div class="icon-xs"></div>
                            <div class="icon-xs"></div>
                            <svg-icon src="https://raincons.rnbw.dev/icons/div.svg"></svg-icon>
                            <span class="text-s">Span</span>
                        </div>
                    </div>

                    <div class="justify-stretch padding-xs background-secondary" id="span10" style="opacity:0;">
                        <div class="gap-s padding-xs">
                            <div class="icon-xs"></div>
                            <div class="icon-xs"></div>
                            <svg-icon src="https://raincons.rnbw.dev/icons/div.svg"></svg-icon>
                            <span class="text-s">Image</span>
                        </div>
                    </div>

                    <div class="justify-stretch padding-xs background-secondary" id="span5" style="opacity:0;">
                        <div class="gap-s padding-xs">
                            <div class="icon-xs"></div>
                            <div class="icon-xs"></div>
                            <svg-icon src="https://raincons.rnbw.dev/icons/div.svg"></svg-icon>
                            <span class="text-s">Span</span>
                        </div>
                    </div>

                    <div class="justify-stretch padding-xs background-secondary" id="span6" style="opacity:0;">
                        <div class="gap-s padding-xs">
                            <div class="icon-xs"></div>
                            <div class="icon-xs"></div>
                            <svg-icon src="https://raincons.rnbw.dev/icons/div.svg"></svg-icon>
                            <span class="text-s">Span</span>
                        </div>
                    </div>

                    <div class="justify-stretch padding-xs background-secondary" id="span7" style="opacity:0;">
                        <div class="gap-s padding-xs">
                            <div class="icon-xs"></div>
                            <div class="icon-xs"></div>
                            <svg-icon src="https://raincons.rnbw.dev/icons/div.svg"></svg-icon>
                            <span class="text-s">Span</span>
                        </div>
                    </div>

                    <div class="justify-stretch padding-xs background-secondary" id="span11" style="opacity:0;">
                        <div class="gap-s padding-xs">
                            <div class="icon-xs"></div>
                            <div class="icon-xs"></div>
                            <svg-icon src="https://raincons.rnbw.dev/icons/div.svg"></svg-icon>
                            <span class="text-s">Image</span>
                        </div>
                    </div>

                    <div class="justify-stretch padding-xs background-secondary" id="span8" style="opacity:0;">
                        <div class="gap-s padding-xs">
                            <div class="icon-xs"></div>
                            <div class="icon-xs"></div>
                            <svg-icon src="https://raincons.rnbw.dev/icons/div.svg"></svg-icon>
                            <span class="text-s">Span</span>
                        </div>
                    </div>

                    <div class="justify-stretch padding-xs background-secondary" id="span9" style="opacity:0;">
                        <div class="gap-s padding-xs">
                            <div class="icon-xs"></div>
                            <div class="icon-xs"></div>
                            <svg-icon src="https://raincons.rnbw.dev/icons/div.svg"></svg-icon>
                            <span class="text-s">Span</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div>
            <div class="padding-m gap-s panel border-bottom border-top">
                <div class="justify-stretch align-center">
                    <span class="text-s">Settings</span>
                    <div class="row gap-s justify-end">
                        <div class="padding-xs radius-xs">
                            <svg-icon src="https://raincons.rnbw.dev/icons/plus.svg"></svg-icon>
                        </div>
                    </div>
                </div>
            </div>
            <div class="panel padding-m gap-s">
                <div class="justify-stretch">
                    <div class="gap-s box">
                        <span class="text-s">Styles</span>
                    </div>
                    <div class="gap-s justify-end">
                        <div class="padding-xs radius-xs">
                            <svg-icon src="https://raincons.rnbw.dev/icons/plus.svg"></svg-icon>
                        </div>
                    </div>
                </div>
                <div class="gap-s">
                    <div class="gap-xs border radius-xs padding-xs">
                        <span class="text-s">Style1</span>
                    </div>
                    <div class="gap-xs border radius-xs padding-xs foreground-secondary">
                        <svg-icon src="https://raincons.rnbw.dev/icons/cross.svg"></svg-icon>
                        <span class="text-s">Style2</span>
                    </div>
                    <div class="padding-xs radius-xs">
                        <svg-icon src="https://raincons.rnbw.dev/icons/states.svg"></svg-icon>
                    </div>
                    <div class="background-secondary-onhover padding-xs radius-xs">
                        <svg-icon src="https://raincons.rnbw.dev/icons/media.svg"></svg-icon>
                    </div>
                </div>
                <div class="justify-stretch">
                    <div class="gap-s box justify-start align-center">
                        <div class="padding-xs radius-xs background-secondary">
                            <svg-icon src="https://raincons.rnbw.dev/icons/width.svg"></svg-icon>
                        </div>
                        <span class="text-s">Width</span>
                    </div>
                    <div class="gap-s">
                        <span class="text-s">24px</span>
                    </div>
                </div>
                <div class="justify-stretch opacity-m">
                    <div class="gap-s box justify-start align-center">
                        <div class="padding-xs radius-xs">
                            <svg-icon src="https://raincons.rnbw.dev/icons/flex.svg"></svg-icon>
                        </div>
                        <span class="text-s">Display</span>
                    </div>
                    <div class="row gap-s">
                        <span class="text-s">Flex</span>
                    </div>
                </div>
                <div class="justify-stretch">
                    <div class="gap-s box justify-start align-center">
                        <div class="padding-xs radius-xs background-secondary">
                            <svg-icon src="https://raincons.rnbw.dev/icons/relative.svg"></svg-icon>
                        </div>
                        <span class="text-s">Position</span>
                    </div>
                    <div class="row gap-s">
                        <span class="text-s">Relative</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="box-s gap-l column padding-m">
    <style>
        .hidden {
            display: none;
        }
        img {
            display: inline;
        }
    </style>
    <h3 style="font-size: 2.38rem;">
        <span class="hidden" style="color: #006400">rnbw 🌈 is a modern design and code editor 💻 .</span>
        <span class="hidden" style="color: #0000cd">it's simple, flexible, and open.</span>
        <span class="hidden" style="color: #800080">It works with your files.</span>
        <span class="hidden" style="color: #ee82ee">it's powered by the web</span>
        <img class="hidden" src="https://rnbw.company/images/rnbwanimation1.png" style="width: auto; height: 2.19vw;">
        <span class="hidden" style="color: #ee82ee">.</span>
        <span class="hidden" style="color: #ff4500">it's open source.</span>
        <span class="hidden" style="color: #ffa500">it fully embraces open web</span>
        <img class="hidden" src="https://rnbw.company/images/rnbwanimation2.png" style="width: auto; height: 2.19vw;">
        <span class="hidden" style="color: #ffa500">standards.</span>
        <span class="hidden" style="color: #ffd700">and, it is powered by AI 🤖 ...</span>
    </h3>
</div>
    <div class="box-s padding-l border-left background-primary radius-s border" style="word-break: break-word;">
        <code>
        </code>
    </div>
</div>
`;

class RnbwPreview extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = rnbwPreviewTemplate;
    }
}

customElements.define("rnbw-preview", RnbwPreview);

let darkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

document.addEventListener("DOMContentLoaded", function () {
    const rnbwPreviewElement = document.querySelector("rnbw-preview");

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
    };

    const observer = new IntersectionObserver(animateOnIntersect, options);

    let text = "";

    function animateOnIntersect(entries, observer) {
        if (entries[0].isIntersecting) {
            observer.unobserve(rnbwPreviewElement);
            const h3 = document.querySelector("h3");
            const spans = h3.querySelectorAll("span");
            let index = 0;
            let charIndex = 0;

            function type() {
                if (index < spans.length) {
                    spans[index].classList.remove("hidden");
                    const originalText = spans[index].getAttribute("data-text");
                    if (index === 0) {
                        let heading3DropdownIcon = document.getElementById(
                            "heading3-dropdown-icon"
                        );
                        heading3DropdownIcon.classList.remove("hidden");
                    }
                    if (charIndex < originalText.length) {
                        spans[index].textContent = originalText.slice(0, charIndex + 1);
                        charIndex++;
                        setTimeout(type, 20);
                    } else {
                        charIndex = 0;
                        index++;
                        if (index === 4) {
                            setTimeout(type, 20);
                            document.getElementById("span4").style.opacity = 1;
                            document.getElementById("span10").style.opacity = 1;
                            document.getElementById("span5").style.opacity = 1;
                        } else if (index === 7) {
                            setTimeout(type, 20);
                            document.getElementById("span7").style.opacity = 1;
                            document.getElementById("span11").style.opacity = 1;
                            document.getElementById("span8").style.opacity = 1;
                        } else {
                            if (index !== 4 && index !== 7) {
                                document.getElementById("span" + (index)).style.opacity = 1;
                            }
                            setTimeout(type, 800);
                        }
                    }
                } else {
                    setTimeout(() => {
                        reset();
                    }, 4000);
                }
                if (index === 4) {
                    setTimeout(() => {
                        const firstImage = h3.querySelector("img:nth-of-type(1)");
                        firstImage.classList.remove("hidden");
                    }, 20);
                }

                if (index === 7) {
                    setTimeout(() => {
                        const secondImage = h3.querySelector("img:nth-of-type(2)");
                        secondImage.classList.remove("hidden");
                    }, 20);
                }

            }

            function updateTextColor() {
                darkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const spans = document.querySelectorAll("code span");
                spans.forEach(span => {
                    const text = span.textContent;
                    span.innerHTML = '';
                    for (let i = 0; i < text.length; i++) {
                        const charSpan = document.createElement('span');
                        charSpan.textContent = text[i];
                        if (
                            ((text[i - 1] === "<" || text[i - 1] === "/") && text[i] === "s") ||
                            ((text[i - 2] === "<" || text[i - 2] === "/") && text[i - 1] === "s" && text[i] === "p") ||
                            ((text[i - 3] === "<" || text[i - 3] === "/") && text[i - 2] === "s" && text[i - 1] === "p" && text[i] === "a") ||
                            ((text[i - 4] === "<" || text[i - 4] === "/") && text[i - 3] === "s" && text[i - 2] === "p" && text[i - 1] === "a" && text[i] === "n") ||

                            ((text[i - 1] === "<" || text[i - 1] === "/") && text[i] === "i") ||
                            ((text[i - 2] === "<" || text[i - 2] === "/") && text[i - 1] === "i" && text[i] === "m") ||
                            ((text[i - 3] === "<" || text[i - 3] === "/") && text[i - 2] === "i" && text[i - 1] === "m" && text[i] === "g") ||

                            ((text[i - 1] === "<" || text[i - 1] === "/") && text[i] === "d") ||
                            ((text[i - 2] === "<" || text[i - 2] === "/") && text[i - 1] === "d" && text[i] === "i") ||
                            ((text[i - 3] === "<" || text[i - 3] === "/") && text[i - 2] === "d" && text[i - 1] === "i" && text[i] === "v") ||

                            ((text[i - 1] === "<" || text[i - 1] === "/") && text[i] === "h") ||
                            ((text[i - 2] === "<" || text[i - 2] === "/") && text[i - 1] === "h" && text[i] === "3")
                        ) {
                            charSpan.style.color = darkTheme ? '#569CD6' : '#95261F';
                        }
                        span.appendChild(charSpan);
                    }
                });
            }

            if (window.matchMedia) {
                window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateTextColor);
            }

            const textArray = [
                "<div>",
                "<h3>",
                "<span>rnbw 🌈 is a modern design and code editor 💻 .</span>",
                "<span>it's simple, flexible, and open.</span>",
                "<span>It works with your files.</span>",
                "<span>it's powered by the web</span>",
                "<img>",
                "<span>.</span>",
                "<span>it's open source.</span>",
                "<span>it fully embraces open web</span>",
                "<img>",
                "<span>standards.</span>",
                "<span>and, it is powered by AI 🤖 ...</span>",
                "</h3>",
                "</div>"
            ];

            const marginValues = [
                "0rem",
                "0.578rem",
                "1.156rem",
                "1.156rem",
                "1.156rem",
                "1.156rem",
                "1.156rem",
                "1.156rem",
                "1.156rem",
                "1.156rem",
                "1.156rem",
                "1.156rem",
                "1.156rem",
                "0.578rem",
                "0rem"
            ];

            const code = document.querySelector("code");

            async function typeText(text, delay = 12, darkTheme) {
                return new Promise(resolve => {
                    const span = document.createElement('span');
                    span.style.display = 'block';
                    span.style.marginLeft = marginValues.shift();
                    code.appendChild(span);
                    let index = 0;
                    const intervalId = setInterval(() => {
                        if (index === text.length) {
                            clearInterval(intervalId);
                            resolve();
                        } else {
                            const charSpan = document.createElement('span');
                            charSpan.textContent = text[index];
                            if (
                                (text[index] === "s" && text[index + 1] === "p" && text[index + 2] === "a" && text[index + 3] === "n") ||
                                (text[index - 1] === "s" && text[index] === "p" && text[index + 1] === "a" && text[index + 2] === "n") ||
                                (text[index - 2] === "s" && text[index - 1] === "p" && text[index] === "a" && text[index + 1] === "n") ||
                                (text[index - 3] === "s" && text[index - 2] === "p" && text[index - 1] === "a" && text[index] === "n") ||

                                (text[index] === "i" && text[index + 1] === "m" && text[index + 2] === "g") ||
                                (text[index - 1] === "i" && text[index] === "m" && text[index + 1] === "g") ||
                                (text[index - 2] === "i" && text[index - 1] === "m" && text[index] === "g") ||

                                (text[index] === "d" && text[index + 1] === "i" && text[index + 2] === "v") ||
                                (text[index - 1] === "d" && text[index] === "i" && text[index + 1] === "v") ||
                                (text[index - 2] === "d" && text[index - 1] === "i" && text[index] === "v") ||

                                (text[index] === "h" && text[index + 1] === "3") ||
                                (text[index - 1] === "h" && text[index] === "3")
                            ) {
                                darkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
                                charSpan.style.color = darkTheme ? '#569CD6' : '#95261F';
                            }
                            span.appendChild(charSpan);
                            index++;
                        }
                    }, delay);
                });
            }

            async function typeCode() {
                for (let i = 0; i < textArray.length; i++) {
                    if (i === 0) {
                        await new Promise(resolve => setTimeout(resolve, 0));
                    } else if (i === 1 || i === 2 || i === 6 || i === 7 || i === 10 || i === 11 || i === 13 || i === 14) {
                        await new Promise(resolve => setTimeout(resolve, 12));
                    }
                    else if (i === 3 || i === 4) {
                        await new Promise(resolve => setTimeout(resolve, 950));
                    }
                    else {
                        await new Promise(resolve => setTimeout(resolve, 700));
                    }
                    await typeText(textArray[i], 12, darkTheme);
                }
            }


            typeCode();
            spans.forEach((span) => span.setAttribute("data-text", span.textContent));
            spans.forEach((span) => (span.textContent = ""));
            type();
        }
    }

    function reset() {
        const code = document.querySelector("code");
        while (code.firstChild) {
            code.removeChild(code.firstChild);
        }
        const spans = document.querySelectorAll("h3 span");
        spans.forEach((span, i) => {
            span.classList.add("hidden");
            document.getElementById("span" + (i + 1)).style.opacity = 0
            document.getElementById("span10").style.opacity = 0;
            document.getElementById("span11").style.opacity = 0;
        });

        let heading3DropdownIcon = document.getElementById(
            "heading3-dropdown-icon"
        );
        heading3DropdownIcon.classList.add("hidden");

        const images = document.querySelectorAll("h3 img");
        images.forEach((img) => img.classList.add("hidden"));

        timer = 1500;

        setTimeout(() => {
            observer.observe(rnbwPreviewElement);
        }, 1500);
    }

    observer.observe(rnbwPreviewElement);
});
