<template>
    <div class="filter"> 
        <form class="form">
            <div class="search">
                <input type="text" class="search" placeholder="Search movie">
            </div>
            <h1>{{props.title}}</h1>
        </form>
    </div>
</template>
<script setup>
const props = defineProps(['title'])
</script>

<style lang="scss" scoped>
.filter {
    .form {
        padding: 0 2%;
        display: flex;
        justify-content:space-between;
        align-items: center;
        width: 100%;
        height: 90px;
        color: #fff;
        background-color: #1a171e;
        h1 {
            color: #fff;
        }
        .search {
            input {
                background-color: #111;
                border: none;
                outline: none;
                color: #fff;
                width: 17rem;
                padding: 15px 17px;
                border-radius: 50px;

                &::placeholder {
                    color: #fff;
                }
            }
        }
    }
}
</style>