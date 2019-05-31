<template>
  <div class="card-expansion">
    <md-card>
      <md-card-media>
        <img class="card-img" src="../../asset/img/ai-man.png" alt="People">
      </md-card-media>

      <md-card-header>
        <div class="md-title">AI</div>
        <div class="md-subhead">
          <a target="_blank" href="https://mp.weixin.qq.com/s/um2qenFpzlG7x2yhomXyNA">AI概念的生根发芽</a>
        </div>
      </md-card-header>

      <md-card-expand>
        <md-card-actions md-alignment="space-between">
          <div>
            <md-button>访问</md-button>
            <md-button>收藏</md-button>
          </div>

          <md-card-expand-trigger>
            <md-button class="md-icon-button">
              <md-icon>keyboard_arrow_down</md-icon>
            </md-button>
          </md-card-expand-trigger>
        </md-card-actions>

        <md-card-expand-content>
          <md-card-content>曾经人工智能（AI）被打上科幻的标签，可见所见所闻决定了人对新事物的深刻印象。《终结者》中施瓦辛格的铮铮铁骨可能就是我对人工智能的第一印象。随着今年AI的兴起，我们也来揭开她那神秘的面纱。</md-card-content>
        </md-card-expand-content>
      </md-card-expand>
    </md-card>

    <md-card>
      <md-card-media>
        <img class="card-img" src="../../asset/img/ai-data.png" alt="People">
      </md-card-media>

      <md-card-header>
        <div class="md-title">深度学习</div>
        <div class="md-subhead">Deep Learning, DL</div>
      </md-card-header>

      <md-card-expand>
        <md-card-actions md-alignment="space-between">
          <div>
            <md-button>访问</md-button>
            <md-button>收藏</md-button>
          </div>
          <md-card-expand-trigger>
            <md-button class="md-icon-button">
              <md-icon>keyboard_arrow_down</md-icon>
            </md-button>
          </md-card-expand-trigger>
        </md-card-actions>

        <md-card-expand-content>
          <md-card-content>深度学习（Deep Learning, DL）或阶层学习（hierarchical learning）是机器学习的技术和研究领域之一，通过建立具有阶层结构的人工神经网络（Artifitial Neural Networks, ANNs），在计算系统中实现人工智能。由于阶层ANN能够对输入信息进行逐层提取和筛选，因此深度学习具有表征学习（representation learning）能力，可以实现端到端的监督学习和非监督学习。此外，深度学习也可参与构建强化学习（reinforcement learning）系统，形成深度强化学习。</md-card-content>
        </md-card-expand-content>
      </md-card-expand>
    </md-card>
  </div>
</template>

<script>
export default {
  name: "CardExpansion"
};
</script>

<style lang="scss" scoped>
.card-expansion {
  height: 480px;
}

.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
.card-img {
  width: 100%;
  height: 160px;
}
</style>