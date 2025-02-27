"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LectureModule = void 0;
const common_1 = require("@nestjs/common");
const lecture_service_1 = require("./service/lecture.service");
const lecture_controller_1 = require("./controller/lecture.controller");
const typeorm_1 = require("@nestjs/typeorm");
const lecture_entity_1 = require("./entities/lecture.entity");
const entities_1 = require("../user/entities");
let LectureModule = class LectureModule {
};
exports.LectureModule = LectureModule;
exports.LectureModule = LectureModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([lecture_entity_1.Lecture, entities_1.User])],
        providers: [lecture_service_1.LectureService],
        controllers: [lecture_controller_1.LectureController],
        exports: [typeorm_1.TypeOrmModule],
    })
], LectureModule);
//# sourceMappingURL=lecture.module.js.map