-- CreateTable
CREATE TABLE `Endereco` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `CodigoPostal` VARCHAR(191) NOT NULL,
    `Descricao` VARCHAR(191) NOT NULL,
    `Complemento` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NotaFiscal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ValorComImpostosAplicados` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cliente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Nome` VARCHAR(50) NOT NULL,
    `EnderecoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pedido` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ValorBruto` DOUBLE NOT NULL,
    `ClienteId` INTEGER NOT NULL,
    `NFId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Cliente` ADD CONSTRAINT `Cliente_EnderecoId_fkey` FOREIGN KEY (`EnderecoId`) REFERENCES `Endereco`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pedido` ADD CONSTRAINT `Pedido_ClienteId_fkey` FOREIGN KEY (`ClienteId`) REFERENCES `Cliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pedido` ADD CONSTRAINT `Pedido_NFId_fkey` FOREIGN KEY (`NFId`) REFERENCES `NotaFiscal`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
