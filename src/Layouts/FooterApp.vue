<template>
    <footer class="footer">
        <div class="container">
            <p class="reserved">© 2020 Workflow, Inc. All rights reserved.</p>
            <!-- <div class="logo-bl">
                <img
                    src="@/assets/images/logo.svg"
                    alt="the logo of company IT-LABS"
                    class="logo"
                />

                <p class="footer__text">
                    {{ $t('footer_text') }}
                </p>
            </div>

            <div class="footer__addres">
                <h3 class="footer__title">
                    {{ $t('footer_title') }}
                </h3>
                
                ul
            </div> -->
        </div>
    </footer>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.reserved {
    border-top: 2px solid #a2a2a2;
    padding-top: 20px;
    margin: 50px 0;
    font-family: 'CeraPro';
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 150%;
    color: #a2a2a2;

    @media (max-width: 992px) {
        margin-bottom: 100px;
    }
}
</style>
