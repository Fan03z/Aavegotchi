// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

// 每只Aavegotchi都有 16 个装备插槽
uint256 constant EQUIPPED_WEARABLE_SLOTS = 16;
// 存在 6 个数字特性
uint256 constant NUMERIC_TRAITS_NUM = 6;
// 存在 5 个可提升特性(在所有数字特性中)
uint256 constant TRAIT_BONUSES_NUM = 5;

// Aavegotchi结构体 (定义所有拥有的特性)
struct Aavegotchi {
    uint[EQUIPPED_WEARABLE_SLOTS] equippedWearables; // 装备插槽
    int8[NUMERIC_TRAITS_NUM] temporaryTraitsBoosts; // 临时特性提升,影响数值如下:
    // [Experience, Rarity Score, Kinship, Eye Color, Eye Shape, Brain Size, Spookiness, Aggressiveness, Energy]
    // 即 [经验, 稀有度, 亲密度, 眼睛颜色, 眼睛形状, 脑力值, 活力值, 攻击值, 能量值]
    int16[NUMERIC_TRAITS_NUM] numericTraits; // 数字特性,具体六种如下:
    // [Eye Color, Eye Shape, Brain Size, Spookiness, Aggressiveness, Energy]
    // 即 [眼睛颜色, 眼睛形状, 脑力值, 活力值, 攻击值, 能量值]
    string name; // Aavegotchi名字
    uint256 randomNumber; // 创建时一同生成的随机数
    uint256 experience; // XP,所获得的经验值
    uint256 minimumStake; // 所需的最低质押价值,创建时即生成
    uint256 usedSkillPoints; // 已使用的技能点数
    uint256 interactionCount; // 与主人互动次数
    address collateralType; // 质押物类型
    uint40 claimTime; // 创建对应的区块时间戳
    uint40 lastTemporaryBoost; // 最近一次提升后的数值?
    uint16 hauntId; // 每一只都对应着的唯一的区别ID
    address owner; // 拥有者地址
    uint8 status; // 状态, 0 == portal, 1 == VRF_PENDING, 2 == open portal, 3 == Aavegotchi ?
    uint40 lastInteracted; // 最近一次互动时间戳
    bool locked; // 是否被锁定
    address escrow; // 第三方托管Aavegotchi的地址
}

library LibAppStorage {}

contract Modifiers {
    constructor() {}
}
