<template>
    <div class="container" id="home-index">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item>
                <img style="width: 100px"
                    src="https://hy.cdn.sohucs.com/sns_clouddisk_search/prod/static/img/ic_pchome_logo.6c0c78ed.png"
                    alt="Element logo" />
            </el-menu-item>
            <div class="flex-grow" />
            <el-menu-item>加入群聊</el-menu-item>
            <el-menu-item>关于我们</el-menu-item>
            <el-menu-item>提交需求</el-menu-item>
        </el-menu>
        <div class="container-logo">
            <el-image src="https://hy.cdn.sohucs.com/sns_clouddisk_search/prod/static/img/ic_pchome_logo.6c0c78ed.png"
                fit="cover" />
        </div>
        <div class="container-search">
            <input class="el-input__inner" type="text" autocomplete="off" placeholder="请输入关键词">
            <span class="el-input__suffix">
                <span class="el-input__suffix-inner">
                    <el-icon>
                        <Search />
                    </el-icon>
                </span>
            </span>
        </div>

        <div class="container-keyword">
            <el-link type="primary">primary</el-link>
            <el-link type="success">success</el-link>
            <el-link type="warning">warning</el-link>
            <el-link type="danger">danger</el-link>
            <el-link type="info">info</el-link>
        </div>

        <div class="container-list">
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                <el-tab-pane label="最新" name="first" class="tab">
                    <div class="list">
                        <el-row :gutter="20" class="item">
                            <el-col :span="16" class="name">
                                1、别惹我
                            </el-col>
                            <el-col :span="8" class="num">
                                479.7w
                            </el-col>
                        </el-row>

                        <el-row :gutter="20" class="item">
                            <el-col :span="16" class="name">
                                2、神狠狠宠
                            </el-col>
                            <el-col :span="8" class="num">
                                329.7w
                            </el-col>
                        </el-row>

                        <el-row :gutter="20" class="item">
                            <el-col :span="16" class="name">
                                3、神狠狠宠
                            </el-col>
                            <el-col :span="8" class="num">
                                329.7w
                            </el-col>
                        </el-row>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="最热" name="second" class="tab">
                    <div class="list">
                        <el-row :gutter="20" class="item">
                            <el-col :span="16" class="name">
                                1、别惹我
                            </el-col>
                            <el-col :span="8" class="num">
                                479.7w
                            </el-col>
                        </el-row>

                        <el-row :gutter="20" class="item">
                            <el-col :span="16" class="name">
                                2、神狠狠宠
                            </el-col>
                            <el-col :span="8" class="num">
                                329.7w
                            </el-col>
                        </el-row>

                        <el-row :gutter="20" class="item">
                            <el-col :span="16" class="name">
                                3、神狠狠宠
                            </el-col>
                            <el-col :span="8" class="num">
                                329.7w
                            </el-col>
                        </el-row>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>

</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import type { TabsPaneContext } from 'element-plus'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
}
</script>

<style scoped>
@media screen and (min-width: 600px) {

    .container-search {
        width: 80vw;
        border-radius: 3vw;
        padding: 1vw 3vw;
    }

    .container-keyword {
        width: 80vw;
    }
}

@media screen and (max-width: 599px) {
    .container-search {
        width: 86vw;
        border-radius: 2vw;
        padding: 3vw 4vw;
    }

    .container-keyword {
        width: 86vw;
    }
}

.container-keyword {
    margin: 0 auto;
    min-width: 150px;
    max-width: 600px;
}

.container-keyword .el-link {
    margin-right: 8px;
}


.container-search {
    margin: 0 auto;
    background-color: #fff;
    box-shadow: 0 0 5px rgba(214, 214, 214, .5);
    min-width: 150px;
    max-width: 600px;
    display: flex;
    align-items: center;
}

.container-search .el-input__suffix {
    cursor: pointer;
}




.container-search input {
    font-size: 16px;
    border: none;
    outline: none;
    /* width: 90%; */
}

.container-logo .el-image {
    text-align: center;
    margin: 0 auto;
    display: block;
    width: 190px;
}



.flex-grow {
    flex-grow: 1;
}

.demo-tabs>.el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}

.container-list {
    width: 80vw;
    margin: 5vw auto;
    background-color: #fff;
    box-shadow: 0 0 5px rgba(214, 214, 214, .5);
    border-radius: 2vw;
    padding: 2vw;
    min-width: 350px;
    max-width: 600px;
}


.container-list .list .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #f2f2f2;
    padding: 13px 0 11px;
    cursor: pointer;
    transition: transform .4s;
    opacity: .9;
    font-size: 14px;
}

.container-list .list .item .name {
    /* font-weight: 100; */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.container-list .list .item .num {
    color: #ff6d29;
    flex: none;
    margin-left: 30px;
    /* font-weight: 700; */
}

.container-list .list .item:hover {
    opacity: 1;
    transform: translateY(-2px)
}

.container-list .list .item:hover .name {
    color: #1e80ff
}
</style>

<style>
#home-index .el-tabs__item.is-active {
    font-size: 18px;
    font-weight: 600;
}
</style>