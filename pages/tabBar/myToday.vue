<template>
    <view>
		<uni-card title="发布信息" extra="2020/5/1" >
		    <view class="show-content">
				{{content}}
			</view>
		</uni-card>
    </view>
</template>
<script>
	import uniCard from '@/components/uni-card/uni-card.vue'
    export default {
        data() {
            return {
               content:"这个是发布信息的页面"
            }
        },
        methods: {

        },
		components :{uniCard}
    }
</script>

<style>
	.show-content{
		font-size: 15px;
	}
</style>