<template>
    <view>
		<uni-card title="今天是个好天气" extra="2020/5/1" >
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
               content:"我叫啊"
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