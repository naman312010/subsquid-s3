import * as p from '@subsquid/evm-codec'
import { event, fun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    Approval: event("0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925", {"owner": indexed(p.address), "approved": indexed(p.address), "tokenId": indexed(p.uint256)}),
    ApprovalForAll: event("0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31", {"owner": indexed(p.address), "operator": indexed(p.address), "approved": p.bool}),
    Asset: event("0x44d88d9b11cb49f8b4e1f8187082658795f23483f8a89e56e14a7d51230b65b4", {"tokenID": p.uint256, "status": p.uint8, "Type": p.uint8, "flag": p.uint256}),
    BatchMetadataUpdate: event("0x6bd5c950a8d8df17f772f5af37cb3655737899cbf903264b9795592da439661c", {"_fromTokenId": p.uint256, "_toTokenId": p.uint256}),
    Initialized: event("0xc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d2", {"version": p.uint64}),
    MetadataUpdate: event("0xf8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce7", {"_tokenId": p.uint256}),
    Minted: event("0x03f17d66ad3bf18e9412eb06582908831508cdb9b8da9cddb1431f645a5b8632", {"minter": indexed(p.address), "to": indexed(p.address), "parentId": p.uint256, "tokenId": p.uint256}),
    RoleAdminChanged: event("0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff", {"role": indexed(p.bytes32), "previousAdminRole": indexed(p.bytes32), "newAdminRole": indexed(p.bytes32)}),
    RoleGranted: event("0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    RoleRevoked: event("0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    Transfer: event("0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef", {"from": indexed(p.address), "to": indexed(p.address), "tokenId": indexed(p.uint256)}),
    Upgraded: event("0xbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b", {"implementation": indexed(p.address)}),
}

export const functions = {
    DEFAULT_ADMIN_ROLE: fun("0xa217fddf", {}, p.bytes32),
    MINTER_ROLE: fun("0xd5391393", {}, p.bytes32),
    UPGRADE_INTERFACE_VERSION: fun("0xad3cb1cc", {}, p.string),
    approve: fun("0x095ea7b3", {"to": p.address, "tokenId": p.uint256}, ),
    asignParent: fun("0x80a62841", {"ParentId": p.uint256, "tokenID": p.uint256}, ),
    assetMap: fun("0x129f9008", {"_0": p.uint256}, {"status": p.uint8, "Type": p.uint8, "flag": p.uint256}),
    balanceOf: fun("0x70a08231", {"owner": p.address}, p.uint256),
    childCount: fun("0x5540d526", {"tokenId": p.uint256}, p.uint256),
    children: fun("0x7002ce42", {"tokenId": p.uint256}, p.array(p.uint256)),
    childrenOf: fun("0x6f19951c", {"tokenId": p.uint256}, p.array(p.uint256)),
    createAsset: fun("0x39385d31", {"to": p.address, "s3url": p.string, "status": p.uint8, "Type": p.uint8}, ),
    deleteAsset: fun("0x7eb79b53", {"tokenID": p.uint256}, ),
    getApproved: fun("0x081812fc", {"tokenId": p.uint256}, p.address),
    getChild: fun("0xb6db669d", {"tokenId": p.uint256, "index": p.uint256}, p.uint256),
    getRoleAdmin: fun("0x248a9ca3", {"role": p.bytes32}, p.bytes32),
    grantRole: fun("0x2f2ff15d", {"role": p.bytes32, "account": p.address}, ),
    hasChildren: fun("0x5906d558", {"tokenId": p.uint256}, p.bool),
    hasRole: fun("0x91d14854", {"role": p.bytes32, "account": p.address}, p.bool),
    initialize: fun("0x8129fc1c", {}, ),
    isApprovedForAll: fun("0xe985e9c5", {"owner": p.address, "operator": p.address}, p.bool),
    isEmpty: fun("0xf90cfeef", {"tokenId": p.uint256}, p.bool),
    isEnumerable: fun("0xc17eb632", {"tokenId": p.uint256}, p.bool),
    isLeaf: fun("0xcce3c13b", {"tokenId": p.uint256}, p.bool),
    isMutable: fun("0x18d069bd", {"tokenId": p.uint256}, p.bool),
    isRoot: fun("0xe527b966", {"tokenId": p.uint256}, p.bool),
    isTransferable: fun("0xb2564569", {"tokenId": p.uint256}, p.bool),
    name: fun("0x06fdde03", {}, p.string),
    owner: fun("0x8da5cb5b", {}, p.address),
    ownerOf: fun("0x6352211e", {"tokenId": p.uint256}, p.address),
    parentMap: fun("0x79dde821", {"_0": p.uint256}, p.uint256),
    parentOf: fun("0xcfa3c132", {"tokenId": p.uint256}, p.uint256),
    proxiableUUID: fun("0x52d1902d", {}, p.bytes32),
    renounceRole: fun("0x36568abe", {"role": p.bytes32, "callerConfirmation": p.address}, ),
    revokeRole: fun("0xd547741f", {"role": p.bytes32, "account": p.address}, ),
    "safeTransferFrom(address,address,uint256)": fun("0x42842e0e", {"from": p.address, "to": p.address, "tokenId": p.uint256}, ),
    "safeTransferFrom(address,address,uint256,bytes)": fun("0xb88d4fde", {"from": p.address, "to": p.address, "tokenId": p.uint256, "data": p.bytes}, ),
    setApprovalForAll: fun("0xa22cb465", {"operator": p.address, "approved": p.bool}, ),
    supportsInterface: fun("0x01ffc9a7", {"interfaceId": p.bytes4}, p.bool),
    symbol: fun("0x95d89b41", {}, p.string),
    tokenURI: fun("0xc87b56dd", {"tokenId": p.uint256}, p.string),
    totalSupply: fun("0x18160ddd", {}, p.uint256),
    transferFrom: fun("0x23b872dd", {"from": p.address, "to": p.address, "tokenId": p.uint256}, ),
    updateParent: fun("0xd58c7044", {"parentID": p.uint256, "tokenID": p.uint256}, ),
    updateStatus: fun("0x3a1b3d31", {"tokenID": p.uint256, "_status": p.uint8}, ),
    upgradeToAndCall: fun("0x4f1ef286", {"newImplementation": p.address, "data": p.bytes}, ),
}

export class Contract extends ContractBase {

    DEFAULT_ADMIN_ROLE() {
        return this.eth_call(functions.DEFAULT_ADMIN_ROLE, {})
    }

    MINTER_ROLE() {
        return this.eth_call(functions.MINTER_ROLE, {})
    }

    UPGRADE_INTERFACE_VERSION() {
        return this.eth_call(functions.UPGRADE_INTERFACE_VERSION, {})
    }

    assetMap(_0: AssetMapParams["_0"]) {
        return this.eth_call(functions.assetMap, {_0})
    }

    balanceOf(owner: BalanceOfParams["owner"]) {
        return this.eth_call(functions.balanceOf, {owner})
    }

    childCount(tokenId: ChildCountParams["tokenId"]) {
        return this.eth_call(functions.childCount, {tokenId})
    }

    children(tokenId: ChildrenParams["tokenId"]) {
        return this.eth_call(functions.children, {tokenId})
    }

    childrenOf(tokenId: ChildrenOfParams["tokenId"]) {
        return this.eth_call(functions.childrenOf, {tokenId})
    }

    getApproved(tokenId: GetApprovedParams["tokenId"]) {
        return this.eth_call(functions.getApproved, {tokenId})
    }

    getChild(tokenId: GetChildParams["tokenId"], index: GetChildParams["index"]) {
        return this.eth_call(functions.getChild, {tokenId, index})
    }

    getRoleAdmin(role: GetRoleAdminParams["role"]) {
        return this.eth_call(functions.getRoleAdmin, {role})
    }

    hasChildren(tokenId: HasChildrenParams["tokenId"]) {
        return this.eth_call(functions.hasChildren, {tokenId})
    }

    hasRole(role: HasRoleParams["role"], account: HasRoleParams["account"]) {
        return this.eth_call(functions.hasRole, {role, account})
    }

    isApprovedForAll(owner: IsApprovedForAllParams["owner"], operator: IsApprovedForAllParams["operator"]) {
        return this.eth_call(functions.isApprovedForAll, {owner, operator})
    }

    isEmpty(tokenId: IsEmptyParams["tokenId"]) {
        return this.eth_call(functions.isEmpty, {tokenId})
    }

    isEnumerable(tokenId: IsEnumerableParams["tokenId"]) {
        return this.eth_call(functions.isEnumerable, {tokenId})
    }

    isLeaf(tokenId: IsLeafParams["tokenId"]) {
        return this.eth_call(functions.isLeaf, {tokenId})
    }

    isMutable(tokenId: IsMutableParams["tokenId"]) {
        return this.eth_call(functions.isMutable, {tokenId})
    }

    isRoot(tokenId: IsRootParams["tokenId"]) {
        return this.eth_call(functions.isRoot, {tokenId})
    }

    isTransferable(tokenId: IsTransferableParams["tokenId"]) {
        return this.eth_call(functions.isTransferable, {tokenId})
    }

    name() {
        return this.eth_call(functions.name, {})
    }

    owner() {
        return this.eth_call(functions.owner, {})
    }

    ownerOf(tokenId: OwnerOfParams["tokenId"]) {
        return this.eth_call(functions.ownerOf, {tokenId})
    }

    parentMap(_0: ParentMapParams["_0"]) {
        return this.eth_call(functions.parentMap, {_0})
    }

    parentOf(tokenId: ParentOfParams["tokenId"]) {
        return this.eth_call(functions.parentOf, {tokenId})
    }

    proxiableUUID() {
        return this.eth_call(functions.proxiableUUID, {})
    }

    supportsInterface(interfaceId: SupportsInterfaceParams["interfaceId"]) {
        return this.eth_call(functions.supportsInterface, {interfaceId})
    }

    symbol() {
        return this.eth_call(functions.symbol, {})
    }

    tokenURI(tokenId: TokenURIParams["tokenId"]) {
        return this.eth_call(functions.tokenURI, {tokenId})
    }

    totalSupply() {
        return this.eth_call(functions.totalSupply, {})
    }
}

/// Event types
export type ApprovalEventArgs = EParams<typeof events.Approval>
export type ApprovalForAllEventArgs = EParams<typeof events.ApprovalForAll>
export type AssetEventArgs = EParams<typeof events.Asset>
export type BatchMetadataUpdateEventArgs = EParams<typeof events.BatchMetadataUpdate>
export type InitializedEventArgs = EParams<typeof events.Initialized>
export type MetadataUpdateEventArgs = EParams<typeof events.MetadataUpdate>
export type MintedEventArgs = EParams<typeof events.Minted>
export type RoleAdminChangedEventArgs = EParams<typeof events.RoleAdminChanged>
export type RoleGrantedEventArgs = EParams<typeof events.RoleGranted>
export type RoleRevokedEventArgs = EParams<typeof events.RoleRevoked>
export type TransferEventArgs = EParams<typeof events.Transfer>
export type UpgradedEventArgs = EParams<typeof events.Upgraded>

/// Function types
export type DEFAULT_ADMIN_ROLEParams = FunctionArguments<typeof functions.DEFAULT_ADMIN_ROLE>
export type DEFAULT_ADMIN_ROLEReturn = FunctionReturn<typeof functions.DEFAULT_ADMIN_ROLE>

export type MINTER_ROLEParams = FunctionArguments<typeof functions.MINTER_ROLE>
export type MINTER_ROLEReturn = FunctionReturn<typeof functions.MINTER_ROLE>

export type UPGRADE_INTERFACE_VERSIONParams = FunctionArguments<typeof functions.UPGRADE_INTERFACE_VERSION>
export type UPGRADE_INTERFACE_VERSIONReturn = FunctionReturn<typeof functions.UPGRADE_INTERFACE_VERSION>

export type ApproveParams = FunctionArguments<typeof functions.approve>
export type ApproveReturn = FunctionReturn<typeof functions.approve>

export type AsignParentParams = FunctionArguments<typeof functions.asignParent>
export type AsignParentReturn = FunctionReturn<typeof functions.asignParent>

export type AssetMapParams = FunctionArguments<typeof functions.assetMap>
export type AssetMapReturn = FunctionReturn<typeof functions.assetMap>

export type BalanceOfParams = FunctionArguments<typeof functions.balanceOf>
export type BalanceOfReturn = FunctionReturn<typeof functions.balanceOf>

export type ChildCountParams = FunctionArguments<typeof functions.childCount>
export type ChildCountReturn = FunctionReturn<typeof functions.childCount>

export type ChildrenParams = FunctionArguments<typeof functions.children>
export type ChildrenReturn = FunctionReturn<typeof functions.children>

export type ChildrenOfParams = FunctionArguments<typeof functions.childrenOf>
export type ChildrenOfReturn = FunctionReturn<typeof functions.childrenOf>

export type CreateAssetParams = FunctionArguments<typeof functions.createAsset>
export type CreateAssetReturn = FunctionReturn<typeof functions.createAsset>

export type DeleteAssetParams = FunctionArguments<typeof functions.deleteAsset>
export type DeleteAssetReturn = FunctionReturn<typeof functions.deleteAsset>

export type GetApprovedParams = FunctionArguments<typeof functions.getApproved>
export type GetApprovedReturn = FunctionReturn<typeof functions.getApproved>

export type GetChildParams = FunctionArguments<typeof functions.getChild>
export type GetChildReturn = FunctionReturn<typeof functions.getChild>

export type GetRoleAdminParams = FunctionArguments<typeof functions.getRoleAdmin>
export type GetRoleAdminReturn = FunctionReturn<typeof functions.getRoleAdmin>

export type GrantRoleParams = FunctionArguments<typeof functions.grantRole>
export type GrantRoleReturn = FunctionReturn<typeof functions.grantRole>

export type HasChildrenParams = FunctionArguments<typeof functions.hasChildren>
export type HasChildrenReturn = FunctionReturn<typeof functions.hasChildren>

export type HasRoleParams = FunctionArguments<typeof functions.hasRole>
export type HasRoleReturn = FunctionReturn<typeof functions.hasRole>

export type InitializeParams = FunctionArguments<typeof functions.initialize>
export type InitializeReturn = FunctionReturn<typeof functions.initialize>

export type IsApprovedForAllParams = FunctionArguments<typeof functions.isApprovedForAll>
export type IsApprovedForAllReturn = FunctionReturn<typeof functions.isApprovedForAll>

export type IsEmptyParams = FunctionArguments<typeof functions.isEmpty>
export type IsEmptyReturn = FunctionReturn<typeof functions.isEmpty>

export type IsEnumerableParams = FunctionArguments<typeof functions.isEnumerable>
export type IsEnumerableReturn = FunctionReturn<typeof functions.isEnumerable>

export type IsLeafParams = FunctionArguments<typeof functions.isLeaf>
export type IsLeafReturn = FunctionReturn<typeof functions.isLeaf>

export type IsMutableParams = FunctionArguments<typeof functions.isMutable>
export type IsMutableReturn = FunctionReturn<typeof functions.isMutable>

export type IsRootParams = FunctionArguments<typeof functions.isRoot>
export type IsRootReturn = FunctionReturn<typeof functions.isRoot>

export type IsTransferableParams = FunctionArguments<typeof functions.isTransferable>
export type IsTransferableReturn = FunctionReturn<typeof functions.isTransferable>

export type NameParams = FunctionArguments<typeof functions.name>
export type NameReturn = FunctionReturn<typeof functions.name>

export type OwnerParams = FunctionArguments<typeof functions.owner>
export type OwnerReturn = FunctionReturn<typeof functions.owner>

export type OwnerOfParams = FunctionArguments<typeof functions.ownerOf>
export type OwnerOfReturn = FunctionReturn<typeof functions.ownerOf>

export type ParentMapParams = FunctionArguments<typeof functions.parentMap>
export type ParentMapReturn = FunctionReturn<typeof functions.parentMap>

export type ParentOfParams = FunctionArguments<typeof functions.parentOf>
export type ParentOfReturn = FunctionReturn<typeof functions.parentOf>

export type ProxiableUUIDParams = FunctionArguments<typeof functions.proxiableUUID>
export type ProxiableUUIDReturn = FunctionReturn<typeof functions.proxiableUUID>

export type RenounceRoleParams = FunctionArguments<typeof functions.renounceRole>
export type RenounceRoleReturn = FunctionReturn<typeof functions.renounceRole>

export type RevokeRoleParams = FunctionArguments<typeof functions.revokeRole>
export type RevokeRoleReturn = FunctionReturn<typeof functions.revokeRole>

export type SafeTransferFromParams_0 = FunctionArguments<typeof functions["safeTransferFrom(address,address,uint256)"]>
export type SafeTransferFromReturn_0 = FunctionReturn<typeof functions["safeTransferFrom(address,address,uint256)"]>

export type SafeTransferFromParams_1 = FunctionArguments<typeof functions["safeTransferFrom(address,address,uint256,bytes)"]>
export type SafeTransferFromReturn_1 = FunctionReturn<typeof functions["safeTransferFrom(address,address,uint256,bytes)"]>

export type SetApprovalForAllParams = FunctionArguments<typeof functions.setApprovalForAll>
export type SetApprovalForAllReturn = FunctionReturn<typeof functions.setApprovalForAll>

export type SupportsInterfaceParams = FunctionArguments<typeof functions.supportsInterface>
export type SupportsInterfaceReturn = FunctionReturn<typeof functions.supportsInterface>

export type SymbolParams = FunctionArguments<typeof functions.symbol>
export type SymbolReturn = FunctionReturn<typeof functions.symbol>

export type TokenURIParams = FunctionArguments<typeof functions.tokenURI>
export type TokenURIReturn = FunctionReturn<typeof functions.tokenURI>

export type TotalSupplyParams = FunctionArguments<typeof functions.totalSupply>
export type TotalSupplyReturn = FunctionReturn<typeof functions.totalSupply>

export type TransferFromParams = FunctionArguments<typeof functions.transferFrom>
export type TransferFromReturn = FunctionReturn<typeof functions.transferFrom>

export type UpdateParentParams = FunctionArguments<typeof functions.updateParent>
export type UpdateParentReturn = FunctionReturn<typeof functions.updateParent>

export type UpdateStatusParams = FunctionArguments<typeof functions.updateStatus>
export type UpdateStatusReturn = FunctionReturn<typeof functions.updateStatus>

export type UpgradeToAndCallParams = FunctionArguments<typeof functions.upgradeToAndCall>
export type UpgradeToAndCallReturn = FunctionReturn<typeof functions.upgradeToAndCall>

