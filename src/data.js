const baseUrl = import.meta.env.BASE_URL || "/";

export function assetPath(path) {
  return `${baseUrl}${path.replace(/^\/+/, "")}`;
}

export const profile = {
  name: "邹佳文",
  englishName: "Zou Jiawen",
  role: "Product Designer / 产品设计师 / UX 设计师",
  city: "上海",
  experience: "8年",
  birthday: "1996.11",
  avatar: assetPath("assets/profile.png"),
  tags: ["运动爱好者", "旅行上瘾者", "斜杠青年", "人间干饭人"],
  slogan: "连接业务与用户，设计更好的体验。"
};

export const projects = [
  {
    id: "pos",
    name: "零售 POS从 0-1 自研建设",
    type: "ToB 零售业务系统 · 移动端 POS · 复杂业务体验设计",
    time: "2023.02 - 2024.12",
    cover: assetPath("assets/project1.jpg"),
    pdf: assetPath("pdfs/POS.pdf"),
    summary: "围绕零售门店交易与进销存业务，从业务调研、流程梳理到移动端 POS 体验落地，完成自研系统 0-1 建设。"
  },
  {
    id: "joymel",
    name: "Joymel ToB 商城移动端体验建设",
    type: "ToB 企业商城 · 移动端 · 交易与资产体验设计",
    time: "2023.06 - 2024.08",
    cover: assetPath("assets/project2.jpg"),
    pdf: assetPath("pdfs/joymel.pdf"),
    summary: "面向企业商城交易链路，优化移动端下单、资产查看与业务协同体验，提升复杂业务在移动场景下的可用性。"
  },
  {
    id: "ai",
    name: "AI Agent 平台从 0-1 体验建设",
    type: "AI 产品 · 企业级平台",
    time: "2026.03 - 2026.04",
    cover: assetPath("assets/project3.jpg"),
    pdf: assetPath("pdfs/AI.pdf"),
    summary: "从企业级 AI Agent 平台的核心使用路径出发，构建设计框架、信息层级与关键任务体验。"
  }
];

export const earlyWorks = [
  {
    id: "crm",
    name: "企业 CRM｜销售与客户管理体验建设",
    type: "ToB CRM / PC + 移动端 / 0-1",
    time: "2021.10 - 2022.06",
    cover: assetPath("assets/project4.jpg"),
    pdf: assetPath("pdfs/crm.pdf"),
    summary:
      "面向家装建材行业销售、导购及管家等一线角色，从业务调研和用户访谈出发，重新梳理客户拓展、客户管理、预约到店及协同服务等核心场景，完成 CRM 产品从 0-1 的体验设计与落地。",
    responsibility:
      "负责项目设计策略、用户调研、业务流程拆解、信息架构、交互与视觉设计，并结合 PC 与移动端不同使用场景进行功能取舍和体验统一；同时沉淀弹窗、抽屉等交互规范，提升产品的一致性与可复用性。",
    result:
      "通过一线访谈和真实业务流程梳理，将复杂销售拓客流程拆解为明确任务节点，减少无效信息和操作路径；项目上线后成功推广至全门店使用，企业员工满意度提升，新用户问题数下降。"
  },
  {
    id: "gkid",
    name: "GKid 英语启蒙 App 0-1 体验设计",
    type: "C端教育 / 儿童产品 / 移动端 App / 0-1",
    time: "2020 - 2021",
    cover: assetPath("assets/project5.jpg"),
    pdf: assetPath("pdfs/gkid.pdf"),
    summary:
      "面向 3-8 岁儿童及家长的英语启蒙场景，从业务增长目标、用户角色与学习路径出发，完成 GKid 英语 App 从 0-1 的产品体验设计，覆盖课程购买、课程学习、绘本资源、成长激励及个人中心等核心模块。",
    responsibility:
      "负责产品整体体验设计及活动专题视觉设计，参与前期业务与用户分析、核心任务梳理、信息架构、交互及视觉方案设计；围绕“家长是购买决策者与辅学者、孩子是实际使用者”的双角色特点，平衡课程转化、持续学习与儿童使用体验。",
    result:
      "围绕“获客-激活-留存-转化-推荐”梳理产品增长路径，并通过课程任务、绘本资源、成长星激励等机制提升学习连续性与产品活跃；项目从 0 起步，累计付费用户 5K+。"
  },
  {
    id: "promo-videos",
    name: "一些宣传视频",
    type: "企业宣传 / 视频制作",
    time: "2022 - 2026",
    cover: assetPath("assets/project6.jpg"),
    videos: [
      {
        title: "宣传视频片段",
        src: assetPath("videos/posvideo.mp4")
      }
    ],
    summary: "汇总一些企业视频制作。",
    responsibility:
      "负责视频创意构思、视觉风格设计、分镜规划、动态设计及后期制作，并根据不同业务目标调整内容节奏与视觉表达。"
  }
];

export const workExperience = [
  {
    title: "高级UI设计师",
    company: "美砺科技有限公司",
    time: "2022.10 - 2026.04",
    description:
      "面向零售、电商及企业数字化场景，负责 POS、ToB 商城、WMS、供应链及平台型产品体验设计；参与从业务调研、需求梳理、信息架构、交互设计到研发落地的完整流程，并协同推进设计规范与组件体系建设。"
  },
  {
    title: "用户体验设计师（UED）",
    company: "米居网络科技",
    time: "2021.09 - 2022.10",
    description:
      "负责家装建材及安装服务场景下的 C 端「牛小匠」App 与企业 CRM 系统体验设计，覆盖 PC 与移动端；参与从业务调研、流程梳理到 0-1 产品设计与上线落地，重点解决跨端业务流程与复杂任务体验问题。"
  },
  {
    title: "UI 设计师",
    company: "精锐教育",
    time: "2018.06 - 2021.09",
    description:
      "负责教育类 Web 与移动端产品的 UI 及交互设计，参与教学、教务等核心产品改版，以及运营活动、视觉规范与组件体系建设，积累 C 端多端产品设计及跨团队协作经验。"
  },
  {
    title: "UI 设计实习生",
    company: "京东金融",
    time: "2017.06 - 2018.06",
    description:
      "参与京东金融 App 会员体系、「我的」及相关核心页面的视觉设计与版本迭代，配合产品、交互完成体验优化及设计规范维护，参与运营活动及 App 视觉内容设计。"
  }
];

export const education = [
  {
    school: "黑龙江外国语学院",
    major: "数字媒体技术",
    degree: "本科",
    time: "2014.09 - 2018.06"
  }
];

export const abilities = {
  professional: [
    ["用户研究", 88],
    ["体验策略", 92],
    ["交互设计", 90],
    ["视觉设计", 92]
  ],
  software: [
    ["Figma", 90],
    ["Sketch", 90],
    ["After Effects", 80],
    ["Principle", 75]
  ]
};

export const contacts = {
  phone: "133 4937 3500",
  wechat: "Eliaukwj",
  email: "zoujiawen111@gmail.com"
};

export const others = [
  {
    title: "原料制造｜业务调研反馈",
    tag: "用户调研 · 业务理解 · 沟通协作",
    feedback:
      "业务说：小姑娘能力很强，对业务理解很快，沟通思路清晰，能够快速抓住关键问题，这次沟通很清晰。",
    thinking:
      "对 B 端项目来说，设计的第一步不是画页面，而是先理解业务。只有把角色、场景和流程梳理清楚，后续的设计判断才有依据。"
  },
  {
    title: "WMS｜仓库现场调研",
    tag: "现场调研 · 场景梳理 · 一线用户",
    feedback:
      "仓库经理说：能主动深入仓库现场，对一线操作流程理解比较细，也能快速转化成设计方案。",
    thinking:
      "很多仓储系统的问题无法只通过 PRD 理解。真实环境里的操作频率、设备限制、异常情况和人员习惯，都会直接影响交互设计，因此我更倾向于先理解真实工作流，再设计系统流程。"
  }
];
