export const workspace_contract_abi = [{"constant":true,"inputs":[],"name":"isActiveIdentity","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_hisSymetricKey","type":"bytes"}],"name":"_authorizePartnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_hisContract","type":"address"},{"name":"_ourSymetricKey","type":"bytes"}],"name":"authorizePartnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_key","type":"bytes32"}],"name":"getKey","outputs":[{"name":"purposes","type":"uint256[]"},{"name":"keyType","type":"uint256"},{"name":"key","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_hisContract","type":"address"}],"name":"getPartnership","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint40"},{"name":"","type":"bytes"},{"name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_docType","type":"uint16"},{"name":"_docTypeVersion","type":"uint16"},{"name":"_fileChecksum","type":"bytes32"},{"name":"_fileLocationEngine","type":"uint16"},{"name":"_fileLocationHash","type":"bytes"},{"name":"_encrypted","type":"bool"},{"name":"_related","type":"uint16"}],"name":"issueCertificate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_key","type":"bytes32"},{"name":"_purpose","type":"uint256"},{"name":"_type","type":"uint256"}],"name":"addKey","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_topic","type":"uint256[]"},{"name":"_issuer","type":"address[]"},{"name":"_signature","type":"bytes"},{"name":"_data","type":"bytes"},{"name":"_offsets","type":"uint256[]"}],"name":"addClaims","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_purpose","type":"uint256"}],"name":"hasIdentityPurpose","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_id","type":"uint256"}],"name":"getDocument","outputs":[{"name":"","type":"uint16"},{"name":"","type":"uint16"},{"name":"","type":"uint40"},{"name":"","type":"address"},{"name":"","type":"bytes32"},{"name":"","type":"uint16"},{"name":"","type":"bytes"},{"name":"","type":"bool"},{"name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_key","type":"bytes32"},{"name":"_purpose","type":"uint256"}],"name":"addPurpose","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"identityInformation","outputs":[{"name":"creator","type":"address"},{"name":"category","type":"uint16"},{"name":"asymetricEncryptionAlgorithm","type":"uint16"},{"name":"symetricEncryptionAlgorithm","type":"uint16"},{"name":"asymetricEncryptionPublicKey","type":"bytes"},{"name":"symetricEncryptionEncryptedKey","type":"bytes"},{"name":"encryptedSecret","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_claimId","type":"bytes32"}],"name":"removeClaim","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_key","type":"bytes32"},{"name":"_purpose","type":"uint256"}],"name":"removeKey","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"isActiveIdentityOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"}],"name":"identityboxBlacklist","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_hisSymetricKey","type":"bytes"}],"name":"_requestPartnership","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_hisContract","type":"address"}],"name":"rejectPartnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getKnownPartnershipsContracts","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_hisContract","type":"address"},{"name":"_ourSymetricKey","type":"bytes"}],"name":"requestPartnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"_approve","type":"bool"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"partnershipsNumber","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_docType","type":"uint16"},{"name":"_docTypeVersion","type":"uint16"},{"name":"_expires","type":"uint40"},{"name":"_fileChecksum","type":"bytes32"},{"name":"_fileLocationEngine","type":"uint16"},{"name":"_fileLocationHash","type":"bytes"},{"name":"_encrypted","type":"bool"}],"name":"createDocument","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_topic","type":"uint256"}],"name":"getClaimIdsByTopic","outputs":[{"name":"claimIds","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getMyPartnershipStatus","outputs":[{"name":"authorization","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"_removePartnership","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"_docType","type":"uint16"},{"name":"_docTypeVersion","type":"uint16"},{"name":"_expires","type":"uint40"},{"name":"_fileChecksum","type":"bytes32"},{"name":"_fileLocationEngine","type":"uint16"},{"name":"_fileLocationHash","type":"bytes"},{"name":"_encrypted","type":"bool"}],"name":"updateDocument","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_purpose","type":"uint256"}],"name":"getKeysByPurpose","outputs":[{"name":"_keys","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"destroyWorkspace","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_privateEmail","type":"bytes"},{"name":"_mobile","type":"bytes"}],"name":"setPrivateProfile","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"}],"name":"deleteDocument","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_topic","type":"uint256[]"},{"name":"_data","type":"bytes"},{"name":"_offsets","type":"uint256[]"}],"name":"updateSelfClaims","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_category","type":"uint256"},{"name":"_text","type":"bytes"}],"name":"identityboxSendtext","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_hisContract","type":"address"}],"name":"removePartnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getPrivateProfile","outputs":[{"name":"","type":"bytes"},{"name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isReader","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_topic","type":"uint256"},{"name":"_scheme","type":"uint256"},{"name":"_issuer","type":"address"},{"name":"_signature","type":"bytes"},{"name":"_data","type":"bytes"},{"name":"_uri","type":"string"}],"name":"addClaim","outputs":[{"name":"claimRequestId","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"execute","outputs":[{"name":"executionId","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"}],"name":"acceptCertificate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"isPartnershipMember","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"}],"name":"identityboxUnblacklist","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_claimId","type":"bytes32"}],"name":"getClaim","outputs":[{"name":"topic","type":"uint256"},{"name":"scheme","type":"uint256"},{"name":"issuer","type":"address"},{"name":"signature","type":"bytes"},{"name":"data","type":"bytes"},{"name":"uri","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isMember","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_key","type":"bytes32"},{"name":"_purpose","type":"uint256"}],"name":"keyHasPurpose","outputs":[{"name":"exists","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"identityboxBlacklisted","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_fileType","type":"uint256"},{"name":"_fileEngine","type":"uint256"},{"name":"_fileHash","type":"bytes"}],"name":"identityboxSendfile","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getDocuments","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_key","type":"bytes32"}],"name":"getKeyPurposes","outputs":[{"name":"purposes","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_foundation","type":"address"},{"name":"_token","type":"address"},{"name":"_category","type":"uint16"},{"name":"_asymetricEncryptionAlgorithm","type":"uint16"},{"name":"_symetricEncryptionAlgorithm","type":"uint16"},{"name":"_asymetricEncryptionPublicKey","type":"bytes"},{"name":"_symetricEncryptionEncryptedKey","type":"bytes"},{"name":"_encryptedSecret","type":"bytes"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":false,"stateMutability":"nonpayable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"id","type":"uint256"}],"name":"DocumentAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"id","type":"uint256"}],"name":"DocumentRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"checksum","type":"bytes32"},{"indexed":true,"name":"issuer","type":"address"},{"indexed":false,"name":"id","type":"uint256"}],"name":"CertificateIssued","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"checksum","type":"bytes32"},{"indexed":true,"name":"issuer","type":"address"},{"indexed":false,"name":"id","type":"uint256"}],"name":"CertificateAccepted","type":"event"},{"anonymous":false,"inputs":[],"name":"PartnershipRequested","type":"event"},{"anonymous":false,"inputs":[],"name":"PartnershipAccepted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":true,"name":"category","type":"uint256"},{"indexed":false,"name":"text","type":"bytes"}],"name":"TextReceived","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":true,"name":"fileType","type":"uint256"},{"indexed":false,"name":"fileEngine","type":"uint256"},{"indexed":false,"name":"fileHash","type":"bytes"}],"name":"FileReceived","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"claimRequestId","type":"uint256"},{"indexed":true,"name":"topic","type":"uint256"},{"indexed":false,"name":"scheme","type":"uint256"},{"indexed":true,"name":"issuer","type":"address"},{"indexed":false,"name":"signature","type":"bytes"},{"indexed":false,"name":"data","type":"bytes"},{"indexed":false,"name":"uri","type":"string"}],"name":"ClaimRequested","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"claimId","type":"bytes32"},{"indexed":true,"name":"topic","type":"uint256"},{"indexed":false,"name":"scheme","type":"uint256"},{"indexed":true,"name":"issuer","type":"address"},{"indexed":false,"name":"signature","type":"bytes"},{"indexed":false,"name":"data","type":"bytes"},{"indexed":false,"name":"uri","type":"string"}],"name":"ClaimAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"claimId","type":"bytes32"},{"indexed":true,"name":"topic","type":"uint256"},{"indexed":false,"name":"scheme","type":"uint256"},{"indexed":true,"name":"issuer","type":"address"},{"indexed":false,"name":"signature","type":"bytes"},{"indexed":false,"name":"data","type":"bytes"},{"indexed":false,"name":"uri","type":"string"}],"name":"ClaimRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"claimId","type":"bytes32"},{"indexed":true,"name":"topic","type":"uint256"},{"indexed":false,"name":"scheme","type":"uint256"},{"indexed":true,"name":"issuer","type":"address"},{"indexed":false,"name":"signature","type":"bytes"},{"indexed":false,"name":"data","type":"bytes"},{"indexed":false,"name":"uri","type":"string"}],"name":"ClaimChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"key","type":"bytes32"},{"indexed":true,"name":"purpose","type":"uint256"},{"indexed":true,"name":"keyType","type":"uint256"}],"name":"KeyAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"key","type":"bytes32"},{"indexed":true,"name":"purpose","type":"uint256"},{"indexed":true,"name":"keyType","type":"uint256"}],"name":"KeyRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"executionId","type":"uint256"},{"indexed":true,"name":"to","type":"address"},{"indexed":true,"name":"value","type":"uint256"},{"indexed":false,"name":"data","type":"bytes"}],"name":"ExecutionRequested","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"executionId","type":"uint256"},{"indexed":true,"name":"to","type":"address"},{"indexed":true,"name":"value","type":"uint256"},{"indexed":false,"name":"data","type":"bytes"}],"name":"Executed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"executionId","type":"uint256"},{"indexed":false,"name":"approved","type":"bool"}],"name":"Approved","type":"event"}];

export const talao_token_abi=[{"constant":true,"inputs":[{"name":"freelance","type":"address"},{"name":"user","type":"address"}],"name":"hasVaultAccess","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"mintingFinished","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newagent","type":"address"},{"name":"newplan","type":"uint256"}],"name":"agentApproval","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newdeposit","type":"uint256"}],"name":"setVaultDeposit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"freelance","type":"address"}],"name":"getFreelanceAgent","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"accessAllowance","outputs":[{"name":"clientAgreement","type":"bool"},{"name":"clientDate","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ethers","type":"uint256"}],"name":"withdrawEther","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"closeVaultAccess","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"tokens","type":"uint256"}],"name":"withdrawTalao","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"theMarketplace","type":"address"}],"name":"setMarketplace","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"price","type":"uint256"}],"name":"createVaultAccess","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"finishMinting","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"result","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"marketplace","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"data","outputs":[{"name":"accessPrice","type":"uint256"},{"name":"appointedAgent","type":"address"},{"name":"sharingPlan","type":"uint256"},{"name":"userDeposit","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"vaultDeposit","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalDeposit","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"freelance","type":"address"}],"name":"getVaultAccess","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"client","type":"address"},{"indexed":true,"name":"freelance","type":"address"},{"indexed":false,"name":"status","type":"uint8"}],"name":"Vault","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[],"name":"MintFinished","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}];


export const foundation_abi = [{"constant":false,"inputs":[{"name":"_member","type":"address"}],"name":"removeMember","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"contractsToKnownMembersIndexes","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_factory","type":"address"}],"name":"addFactory","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"contractsToOwners","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"ownersToContracts","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_factory","type":"address"}],"name":"removeFactory","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnershipInFoundation","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_contract","type":"address"},{"name":"_newAccount","type":"address"}],"name":"transferOwnershipInFoundation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_member","type":"address"}],"name":"addMember","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_contract","type":"address"},{"name":"_account","type":"address"}],"name":"setInitialOwnerInFoundation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"membersToContracts","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getContractsIndex","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"factories","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":false,"stateMutability":"nonpayable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_factory","type":"address"}],"name":"FactoryAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_factory","type":"address"}],"name":"FactoryRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}];
