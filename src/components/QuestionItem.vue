<template>
    <div :class="['question', { open: show }]">
        <div class="question__block" @click="show = !show">
            <p class="question__text">Lorem ipsum dolor sit amet.</p>
            <font-awesome-icon
                class="question__icon"
                icon="fa-solid fa-arrow-left-long"
            />
        </div>

        <Transition duration="550" name="nested">
            <div class="outer" v-if="show">
                <p class="question__answer inner">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Exercitationem odit ut, corporis perspiciatis nesciunt
                    necessitatibus quis facilis ratione dolores sit.
                </p>
            </div>
        </Transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false,
        }
    },
}
</script>

<style scope>
.outer,
.inner {
    background: #0FE97E;
    padding: 30px;
    min-height: 100px;
}

.inner {
    background: #ccc;
}

.nested-enter-active,
.nested-leave-active {
    transition: all 0.3s ease-in-out;
}
/* delay leave of parent element */
.nested-leave-active {
    transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
    transform: translateY(30px);
    opacity: 0;
}

/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner {
    transition: all 0.3s ease-in-out;
}
/* delay enter of nested element */
.nested-enter-active .inner {
    transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
    transform: translateX(30px);
    /*
  	Hack around a Chrome 96 bug in handling nested opacity transitions.
    This is not needed in other browsers or Chrome 99+ where the bug
    has been fixed.
  */
    opacity: 0.001;
}
</style>