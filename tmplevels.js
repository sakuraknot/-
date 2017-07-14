﻿var levelsRaw = {
  '冬天裡的一把火': [-0.66, 1, 1.33, -1.33, -1.33],
  '聖誕家庭聚會': [1.33, 1, 0.66, 1.33, -1.33],
  '海邊派對的搭配': [0.66, 1.33, 1, -1.33, 1.33],
  '大偵探福爾摩斯': [1.33, -1.33, -1.33, 0.66, -1.33],
  '辦公室明星': [1.33, -1.33, -1.33, -1, 0.66],
  '奇幻童話園': [-1.33, 1.33, -1.33, 1, 0.66],
  '女王大人': [-1, -1.33, -1.33, -1.33, 0.66],
  '金色音樂廳': [-1.33, -1.33, -1.33, -1, -1],
  '夏季遊園會': [1.33, 1, 0.66, 1.33, 1.33],
  '有女初長成': [0.66, -1.33, -1.33, 1.33, -1],
  '宮廷歌舞會': [-1.33, -1, -1.33, -1.33, -0.66],
  '運動進行時': [1, 1, 1.33, 1.33, 1],
  '春天在哪裡': [0.66, 1.33, 1.33, 1.33, 1],
  '夏日物語': [1.33, 0.66, -1.33, 1, 1.33],
  '穿越進行時': [1, -1, -1, 1, -1],
  '豔陽當空照': [1, 1, -1, 1, 1],
  '年輕的春遊': [1.33, 1.33, 1.33, 1, 0.66],
  '清秀佳人': [1.33, 0.66, -1.33, 1.33, 1],
  '絕色無雙': [-1.33, -1, -1.33, 1.33, -0.66],
  '運動飲料推廣': [0.85, 0.66, 0.9, 0.66, 0.66],
  '褲裝遊行': [1.7, 1.2, 1.2, -1.2, -1.5],
  '少女的茶會': [-0.75, 0.5, 0.75, 0.5, -0.5],
  '搖滾演唱會': [0.5, -0.5, 0.5, -0.7, 0.7],
  '花田攝影會': [0.75, 1, 0.75, 1, 0.75],
  '話劇甄選會': [-1, -1, -1, -1, -1],
  '蘋果聯邦': [1, -1, -1, -1, -1],
  '雲端和風茶室': [-0.75, -1, -1, 0.75, -0.75],
  '牛仔布的逆襲': [1.25, -1, 1.25, 1, -1],
  '保育員面試': [1, 1.5, 2, 1.5, -1],
  '愛斯基摩旅遊': [1, 1.5, 1.2, 1, -1.5],
  '海邊比基尼': [0.75, -0.75, -0.75, -1, 1],
  '睡衣兜風派對': [0.55, 0.75, 0.55, 0.75, -0.55],
  '雲端漢服': [-0.5, -0.5, -0.65, 0.65, -0.5],
  '1-1': [1, 2, 3, 2, 1],
  '1-2': [3, 1.5, -3, 3, -1],
  '1-3': [-2, -1, -3, 2, 1],
  '1-4': [2, -3, -2, -1, -1],
  '1-5': [-1, 3, 2, -2, 1],
  '1-6': [2, 1, -2, 3, 1],
  '1-7': [3, -2, -2, 1, 1],
  '1-8': [-1, -2, -2, -4, 1],
  '1-9': [-1, -2, 2, -3, 1],
  '2-1': [-2, 3, 1, 2, 1],
  '2-2': [3, 1, 2, 2, -1],
  '2-3': [2, -2, -3, -1, -1],
  '2-4': [1, 2, 1, 2, -3],
  '2-5': [2, -2, 3, 1, -1],
  '2-6': [-1, 3, -2, 2, 1],
  '2-7': [1, 2, 2, 1, -3],
  '2-8': [-2, 2, -2, 2, 1],
  '2-9': [-3, -2, -2, -1, 1],
  '2-支1': [-3, -2, -2, -1, -1],
  '2-支2': [2, -2, -3, 1, 1],
  '3-1': [2, -1, -3, 2, 1],
  '3-2': [-4, -1, 2, -2, 1],
  '3-3': [2, -3, -2, 1, -1],
  '3-4': [2, 1, -2, 3, 1],
  '3-5': [2, 1, 3, 1, 2],
  '3-6': [2, 2, 1, -1, 3],
  '3-7': [-2, 2, -2, 1, 1],
  '3-8': [2, 1, 3, 1, 2],
  '3-9': [2, -1, -2, -3, 1],
  '3-10': [-1, 3, 2, 2, 1],
  '3-11': [-3, -2, -2, -2, 1],
  '3-12': [2, 1, 3, 1, -2],
  '3-支1': [-3, -2, -2, 1, -1],
  '3-支2': [-3, -1, -2, -1, 2],
  '4-1': [3, 1, 2, 1, -3],
  '4-2': [0.2, 3, 0.2, 3, 0.2],
  '4-3': [0.2, -3, 0.2, -3, 0.2],
  '4-4': [1, 2, -2, 3, 1],
  '4-5': [2, -1, 2, 1, 3],
  '4-6': [-1, -2, -3, -2, -1],
  '4-7': [-3, -1, -2, 2, -1],
  '4-8': [3, 2, 2, -1, 1],
  '4-9': [2, -1, -3, 2, 1],
  '4-10': [1, 2, 3, 2, 1],
  '4-11': [2, -2, -3, -1, 1],
  '4-12': [2, 3, 3, -2, 1],
  '4-支1': [-1, 3, 2, 2, 1],
  '4-支2': [3, 2, 2, 1, 1],
  '4-支3': [2, 2, 3, -1, -1],
  '5-1': [2, 1, 3, 1, 2],
  '5-2': [3, -2, -2, 1, 1],
  '5-3': [-3, -2, -2, 1, 1],
  '5-4': [-1.2, -0.75, -1.25, -2, 0.75],
  '5-5': [-3, 2, -2, 1, 1],
  '5-6': [3, 1, -2, 2, -1],
  '5-7': [-1, 1, 2, 2, 1],
  '5-8': [2, -1, -2, 1, -3],
  '5-9': [-3, -2, -2, -1, 1],
  '5-10': [-3, 3, -4, 1.5, 1.5],
  '5-11': [2, -1, 3, -2, 1],
  '5-12': [2, 1.125, -3.375, 2, -1.35],
  '5-支1': [1, 2, -1, 2, -3],
  '5-支2': [2, 2, 1, 3, 1],
  '5-支3': [2, 1, -3, -2, 1],
  '6-1': [-2, 3, 1, 2, -1],
  '6-2': [2, -1, -3, 2, 1],
  '6-3': [-1, 2, -1, 3, 2],
  '6-4': [2, 3, 2, 1, -1],
  '6-5': [-2, 3, 2, 1, 1],
  '6-6': [3, 1, 2, 2, 1],
  '6-7': [-1, 3, 2, 2, 1],
  '6-8': [1, -1, -3, -2, 2],
  '6-9': [-1, -2, -3, -2, 1],
  '6-10': [-1, 2, -1, 1, -1],
  '6-11': [2, -1, -3, 2, 1],
  '6-支1': [-2, -2, -1, -3, 1],
  '6-支2': [-1, 2, 2, 1, 3],
  '6-支3': [-2, -1, 2, -3, 1],
  '7-1': [2, -2.5, -3, -2, 1.5],
  '7-2': [-3, -2, -3, 3, -2],
  '7-3': [3, -2.5, 2, -3, 3],
  '7-4': [-1.25, -2, -2, 1.5, -1],
  '7-5': [3, 2, 3, 2, 2],
  '7-6': [-2, -1, -2, 1.5, 1.5],
  '7-7': [-1.8, -1.8, -1.2, -1.2, 0.6],
  '7-8': [2, -1.34, 2, -1.34, 0.66],
  '7-9': [2, -3, 1.5, 2, -3],
  '7-支1': [2, -3, -3, 2, 2],
  '7-支2': [2, 3, -3, 2, 1.5],
  '7-支3': [3, -3, 2, -2, 2],
  '7-支4': [2, 2.5, -2, 2.5, 1.75],
  '7-支5': [2.5, 2, 2.5, 2, 1.75],
  '8-1': [2, 2.5, 2.5, 2, 1.5],
  '8-2': [-2.5, -2, 2.5, -2, 1.5],
  '8-3': [2.7, 2, -2, 2.7, -1.66],
  '8-4': [2, -2.5, -2.5, 1.5, -2],
  '8-5': [1.25, 1.25, -2, 1.25, 1.25],
  '8-6': [-2, -1.25, -2, -1.25, 1.25],
  '8-7': [2.5, 2, 2.5, 2, 1.75],
  '8-8': [-3, -2.5, -2.5, -2.5, 3],
  '8-9': [-2.5, 2.5, -2, 2, 1.5],
  '8-支1': [2.5, -1.75, 2, -2.5, 2],
  '8-支2': [2, 2, -2.5, 2.5, -1.5],
  '8-支3': [-2.5, -2, -2.5, -2, 1.75],
  '9-1': [2.75, 2, 2.75, 2, 1.75],
  '9-2': [-1.75, 1.33, -1.75, -1.33, 1.25],
  '9-3': [1.5, -1.5, -2, 1.5, -2],
  '9-4': [-1, -1.5, -1.5, -1, -1],
  '9-5': [2, 2.25, 2.25, 2, 2.25],
  '9-6-1': [2, -1.25, -2, 1.25, 1.25],
  '9-6-2': [1.4, -2, -2.25, -1.4, 1.2],
  '9-7': [1.6, 1.4, 1.4, -1.5, 1.25],
  '9-8': [1.75, 1.5, 1.75, 1.5, -1.5],
  '9-9-1': [-2, 1, 1.4, -1, 1],
  '9-9-2': [-2.5, 2, 2, -2.4, 1.5],
  '9-9-3': [-2.5, -2, -2.5, 1.75, 1.5],
  '9-支1': [1.5, 1.5, 2, 1.5, 2],
  '9-支2': [-1.5, 1.5, -1.8, 2, 1.6],
  '9-支3': [2, -2.5, 2, -2.5, 1.75],
};
